import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { STAFF_ACTION_TYPES } from "../../constants/staff.type";

export const useStaff = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({});
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const dispatch = useDispatch();
  const getAllStaff = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8080/api/v1/saloon/getAllStylists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status !== 200) {
        throw new Error("some thing went wrong");
      } else {
        dispatch({
          type: STAFF_ACTION_TYPES.SET_STAFF,
          payload: response.data,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data);
    }
  };

  return {
    getAllStaff,
    loading,
    error,
  };
};
