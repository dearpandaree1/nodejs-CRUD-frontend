import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import AddAddressButton from "../features/createAddress/AddAdressButton";
import AddressContainer from "../features/showAllAddress/AddressContainer";
import axios from "../config/axios";

export default function AddressPage() {

    const [allAddress, setAllAddress] = useState([]);
    const [initialLoading, setInitialLoading] = useState(true);
    const  navigate = useNavigate()

    // useEffect(()=> {
    //         axios
    //         .get("/")
    //         .then((res) =>{
    //             console.log(res)
    //             setAllAddress(res.data.addresses)
    //         })
    //         .finally(() => {
    //             setInitialLoading(false)
    //         })
    //     }
    // )
    
    return <>
    <div className="w-[100%] h-[100%]">
        <h1 className="flex justify-center font-bold m-auto text-4xl p-3 w-[100%] flex-wrap">Addresses</h1>   
        <div className="justify-center flex">
            <div className="grid grid-cols-2 w-[60%]">
            {allAddress.map((el) => {
            return (
                <div key={el?.id}>
                <AddressContainer
                firstName={el?.firstName}
                lastName={el?.lastName}
                phoneNumber={el?.phoneNumber}
                address1={el?.address1}
                address2={el?.address2}
                city={el?.city}
                zipCode={el?.zipCode}
                country={el?.country}
                province={el?.province}
                    onClickRemove={() => {
                    handleRemoveClick(el.id);
                    }}
                    onClickEdit={() => {
                    // console.log(el.id);
                    navigate(`${el.id}`);
                    }}
                />
                </div>
            );
            })}
     
            </div>
        </div>
        <AddAddressButton buttonName={"Add ddress"}/>
    </div>
    </>
} 