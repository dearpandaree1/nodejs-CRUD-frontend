import AddressInput from "./AddressInput";
import AddressButton from "./AddressSubmitButton";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
// import { useAddress } from "../../hook/use-address";
// import { editAddress } from "../../../../../nodejs/addressespage-express/src/controller/address-controller";
// import axios from "../../config/axios";



export default function AddressForm() {
    // const { addressId } = useParams()
    // const [ address, setAddress] = useState({})
    // const { allAddress, setAllAddress } = useAddress();
    // const [input, setInput] = useState({
    //     // firstName: "",
    //     // lastName: "",
    //     // phoneNumber: "",
    //     // address1: "",
    //     // address2: "",
    //     // city: "",
    //     // zipCode: "",
    //     // country: "",
    //     // province: "",
    // })
    // const [file, setFile] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [initialLoading, setInitialLoading] = useState(true);
    // const {editAddress, getAddress} = useAddress();

    // useEffect(() => {
    //     axios
    //         .get(`/address/${addressId}`)
    //         .then((res) => {
    //             setAddress(res.data);
    //             setInput(res.data);
    //             console.log(res.data);
    //         })
    //         .finally(() => {
    //             setInitialLoading(false)
    //         })
    // }, [])

    // const handleChangeInput = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value})
    // }

    // const handleSubmitForm = async (e, addressId, input) => {
    //     try {
    //         e.preventDefault()

    //         const formData = new FormData();
    //         formData.append("firstName", input.firstName)
    //         formData.append("lastName", input.lastName)
    //         formData.append("phoneNumber", input.phoneNumber)
    //         formData.append("address1", input.address1)
    //         formData.append("address2", input.address2)
    //         formData.append("city", input.city)
    //         formData.append("zipCode", input.zipCode)
    //         formData.append("country", input.country)
    //         formData.append("province", input.province)
    //         await editAddress(formData, addressId);

    //     } catch (err) {
    //         console.log(err)
    //     } finally (isLoading) {
    //         return <div>Loading ja</div>
    //     }
    //     console.log(input)

        return <>
        {/* <h1 className="m-auto mt-10 ">Please fill in the information below:</h1> */}
        <form className=" m-auto mt-10 w-[600px] p-10  "
        // onSubmit={handleSubmitForm}
        >
            <h1 className="text-[15px] mb-4 font-medium ">Please fill in the information below:</h1>
            <div className="flex flex-col gap-3 w-[100%]">
                <div className="flex gap-3 justify-between">
                    <AddressInput 
                    placeholder={"First name"} name="firstName" 
                    // value={input && input?.firstName} 
                    // onChange={handleChangeInput}
                    />
                    <AddressInput 
                    placeholder={"Last name"} name="lastName" 
                    // value={input && input?.lastName} 
                    // onChange={handleChangeInput}
                    />
                </div>
                <AddressInput 
                placeholder={"Phone number"} name="phoneNumber" 
                // value={input && input?.firstName} 
                // onChange={handleChangeInput}
                />
                <AddressInput 
                placeholder={"Address 1"} name="address1" 
                // value={input && input?.address1} 
                // onChange={handleChangeInput}
                />
                <AddressInput 
                placeholder={"Address 2"} name="address2" 
                // value={input && input?.address2} 
                // onChange={handleChangeInput}
                />
                <div className="flex gap-3 justify-between">
                    <AddressInput 
                    placeholder={"City"} name="city" 
                    // value={input && input?.city} 
                    // onChange={handleChangeInput}
                    />
                    <AddressInput 
                    placeholder={"Zip code"} name="zipCode" 
                    // value={input && input?.zipCode} 
                    // onChange={handleChangeInput}
                    />
                </div>
                <AddressInput 
                placeholder={"Country"} name="country" 
                // value={input && input?.country} 
                // onChange={handleChangeInput}
                />
                <AddressInput 
                placeholder={"Province"} name="province" 
                // value={input && input?.province} 
                // onChange={handleChangeInput}
                />
            </div>
        
        <AddressButton 
        buttonName={"Save address"} 
        // onClick={(e)=> handleSubmitForm(e, addressId, input)} 
        />
            {/* </div> */}
        </form>
        </>
}