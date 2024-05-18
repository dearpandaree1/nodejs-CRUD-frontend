import { createContext, useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const AddressContext = createContext();

export default function AddressContextProvider({ children }) {
  const { addressId } = useParams();
  const [initialLoading, setInitialLoading] = useState(true);
  const [address, setAddress] = useState([]);
  const [allAddress, setAllAddress] = useState([]);

  const getAddress = () => {
    axios
      .get("/address")
      .then((res) => {
        setAllAddress(res.data.addresses);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  };

  useEffect(() => {
    getAddress();
  }, [allAddress.lenght]);

  const createAddress = async (input) => {
    try {
      console.log("input before post axios", input);
      const res = await axios.post("/address", input);
      if (!res) {
        setInitialLoading(true);
      }
      console.log("create address successfully~", input);
    } catch (err) {
      console.log("create address failed:", err);
    }
  };

  const editAddress = async (input, addressId) => {
    try {
      console.log(input);
      const res = await axios.patch(`/address/${addressId}`, input);
      if (!res) {
        setInitialLoading(true);
      }
      console.log("Edit address successfully", input);
    } catch (err) {
      console.log("Error editing address: ", err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        createAddress,
        editAddress,
        getAddress,
        allAddress,
        initialLoading,
        setInitialLoading,
        // getAddressById,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
