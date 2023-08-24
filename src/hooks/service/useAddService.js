import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SERVICE_ACTION_TYPES } from "../../constants/service.type";

const useAddNewService = (formInput, images, setIsOpen) => {
  console.log(formInput);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addNewService = async (event) => {
    event.preventDefault();
    const user = localStorage.getItem("user");
    const { token } = JSON.parse(user);

    try {
      const formData = new FormData();

      for (const image in images) {
        formData.append("files", images[image]);
      }

      formData.append("serviceTitle", formInput.serviceTitle);
      formData.append("serviceType", formInput.serviceType);
      formData.append("gender", formInput.gender);
      formData.append("price", formInput.price);
      formData.append("description", formInput.description);

      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/saloon/addService",
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
        type: SERVICE_ACTION_TYPES.ADD_SERVICE,
        payload: response?.data,
      });

      setLoading(false);
      setIsOpen((isOpen) => !isOpen);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    loading,

    addNewService,
  };
};

export default useAddNewService;
