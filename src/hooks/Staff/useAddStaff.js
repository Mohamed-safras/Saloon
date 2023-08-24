import axios from "axios";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { STAFF_ACTION_TYPES } from "../../constants/staff.type";

export const useAddStaff = (formInput, images, { setIsOpen, isOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addNewStaff = async (event) => {
    event.preventDefault();
    const user = localStorage.getItem("user");
    const { token } = JSON.parse(user);

    try {
      const formData = new FormData();

      for (const image in images) {
        formData.append("files", images[image]);
      }

      formData.append("name", formInput.name);
      formData.append("email", formInput.email);
      formData.append("working_time", formInput.working_time);
      formData.append("experience", formInput.experience);
      formData.append("about", formInput.about);

      for (const service_special in formInput.service_special) {
        formData.append(
          "service_special",
          formInput.service_special[service_special]
        );
      }

      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/saloon/addStylist",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // onUploadProgress: (progressEvent) => {
          //   console.log((progressEvent.loaded / progressEvent.total) * 100);
          // },
        }
      );

      dispatch({
        type: STAFF_ACTION_TYPES.ADD_STAFF,
        payload: response.data,
      });

      setLoading(false);
      setIsOpen(!isOpen);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    addNewStaff,
    loading,
  };
};
