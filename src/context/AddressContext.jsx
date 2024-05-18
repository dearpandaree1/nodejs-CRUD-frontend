import { createContext, useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";

export const AddressContext = createContext();

export default function AddressContextProvider({ children }) {
  const [allAddress, setAllAddress] = useState([]);

  const getAddress = () => {
    axios
      .get("/address")
      .then((res) => {
        setAllAddress(res.data.addresses);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAddress();
  }, [allAddress.lenght]);

  const createAddress = async (input) => {
    try {
      // console.log("input before post axios", input);
      await axios.post("/address", input);
      // console.log("create address successfully~", input);
    } catch (err) {
      console.log("create address failed:", err);
    }
  };

  const editAddress = async (input, addressId) => {
    try {
      console.log(input);
      await axios.patch(`/address/${addressId}`, input);
      // console.log("Edit address successfully", input);
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
        // getAddressById,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
