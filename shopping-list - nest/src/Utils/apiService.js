import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
import axios from "axios";
const API_URL = "http://localhost:5000/";

export function useGetData(link) {
  let data = undefined;
  const { setSpinnerFlag } = useContext(Context);

  const getData = async () => {
    setSpinnerFlag(true);
    const response = await axios.get(`${API_URL}${link}`).catch(() => {
      toast.error("Something went wrong");
      setSpinnerFlag(false);
    });
    setSpinnerFlag(false);
    if (response) data = response.data;
    return data;
    //
  };
  return { getData };
}

export function usePostData(link) {
  const { setApiResponse } = useContext(Context);

  const postData = (postRequestBody) =>
    new Promise(async (resolve, reject) => {
      await axios
        .post(`${API_URL}${link}`, postRequestBody)
        .then((response) => {
          setApiResponse(response.data);
          resolve(response.data);
        })
        .catch((response) => {
          if (response.response.status === 422)
            reject(response.response.data.message[0]);
          else reject(response.response.data.message);
        });
    });
  return { postData };
}

export function useDeleteData(link) {
  const { setApiResponse } = useContext(Context);

  const deleteData = async (itemId) => {
    const response = await axios
      .delete(`${API_URL}${link}/${itemId}`)
      .catch(() => {
        toast.error("Something went wrong");
      });

    setApiResponse(response.data);
    return response.data;
  };
  return { deleteData };
}

export function usePatchData(link) {
  const { setApiResponse } = useContext(Context);

  const patchData = async (itemId, postRequestBody) => {
    const response = await axios
      .patch(`${API_URL}${link}/${itemId}`, postRequestBody)
      .catch(() => {
        toast.error("Something went wrong");
      });

    setApiResponse(response.data);
    return response.data;
  };
  return { patchData };
}
