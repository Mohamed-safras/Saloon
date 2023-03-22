import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux-store/user/user.action";

const useAuthHandler = (formInput) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    title,
    email,
    password,
    confirmPassword,
    phone,
    shopNo,
    street,
    city,
    zip,
  } = formInput;

  const register = async (event) => {
    event.preventDefault();

    // if (!formInput) return;
    let emptyFileds = [];

    if (!title) emptyFileds.push("Title");
    if (!email) emptyFileds.push("Email");
    if (!password) emptyFileds.push("Password");
    if (!confirmPassword) emptyFileds.push("Confirm Password");
    if (!phone) emptyFileds.push("Phone");
    if (!shopNo) emptyFileds.push("Address Line 1");
    if (!street) emptyFileds.push("Address Line 2");
    if (!city) emptyFileds.push("City");
    if (!zip) emptyFileds.push("Zip/Postal Code");

    if (emptyFileds.length > 0) {
      setError(`${[...emptyFileds]} can't be empty`);
      return;
    } else {
      setError("");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/saloon//register",
        {
          ...formInput,
          address: {
            shopNo,
            street,
            city,
            zip,
            country: "Sri Lanka",
            location: {
              coordinates: [2.111, 3.333],
            },
          },
          role: "saloon",
          avatar: "fsdfds",
        }
      );
      console.log(response);
      if (response.status === 200 || response.statusText === "OK") {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setCurrentUser(response.data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  return {
    register,
    loading,
    error,
  };
};

export default useAuthHandler;
