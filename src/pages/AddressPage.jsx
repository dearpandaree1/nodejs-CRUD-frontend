import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddAddressButton from "../features/createAddress/AddAdressButton";
import AddressContainer from "../features/showAllAddress/AddressContainer";
import axios from "../config/axios";
import { useAddress } from "../hook/use-address";
import { ToastContainer, toast } from "react-toastify";

export default function AddressPage() {
  const navigate = useNavigate();
  const { getAddress, allAddress } = useAddress();

  useEffect(() => {
    getAddress();
  }, [allAddress.length]);

  const showToastMessage = () => {
    // toast.success("Remove an address successfully!", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
    toast.warning("This is a toast notification !");
  };

  const handleRemoveClick = async (addressId) => {
    console.log(addressId);
    try {
      await axios.delete(`/address/${addressId}`);
      getAddress();
      showToastMessage();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100%]">
        <h1 className="flex justify-center font-bold m-auto text-4xl p-3 w-[100%] flex-wrap">
          Addresses
        </h1>
        <div className="justify-center flex">
          <div className="grid grid-cols-2 w-[60%] ">
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
                    onClickRemove={() => {
                      handleRemoveClick(el.id);
                      // showToastMessage();
                    }}
                    onClickEdit={() => {
                      navigate(`address/${el.id}`);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <AddAddressButton buttonName={"Add address"} />
      </div>
    </>
  );
}
