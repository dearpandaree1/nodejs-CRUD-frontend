import { createContext, useState } from "react";
import axios from "../config/axios"
import { useEffect } from "react";

export const AddressContext = createContext();

export default function AddressContextProvider({ children }) {
    const [initialLoading, setInitialLoading] = useState(true);
    // const [address, setAddress] = useState([]) 
    const [allAddress, setAllAddress] = useState([]) 

    const getAddress = () => {
        axios 
            .get("/address")
            .then((res) => {
                console.log("res.data",res.data)
                setAllAddress(res.data.address)
            }) 
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setInitialLoading(false)
            })
    }

    useEffect(() => {
        getAddress()
    }, [allAddress.lenght]);

    const createAddress = async (formData) => {
        try {
            console.log("FORMDATA before post axios", formData);
            const res = await axios.post("/", formData);
            if(!res) {
                setInitialLoading(true);
            }
            console.log("File uploaded successfully", formData)
            
        } catch (err) {
            console.log("create product failed:", err)
        }
    }

    const editAddress = async (formData, id) => {
        try {
            console.log("FORMDATA", formData);
            const res = await axios.patch(`/${id}`, formData);
            if (!res) {
                setInitialLoading(true);
            }
            console.log("File uploaded successfully", formData)
            
        } catch (err) {
            console.log("Error editing address: ", err)
        }
    }

    return (
        <AddressContext.Provider
            value={{
                createAddress,
                editAddress
                 }}
        >
            {children}
        </AddressContext.Provider>
    )

}