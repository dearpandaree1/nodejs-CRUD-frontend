import AddressInput from "./AddressInput";
import AddressButton from "./AddressSubmitButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAddress } from "../../hook/use-address";
import axios from "../../config/axios";

export default function AddressForm() {
  const { addressId } = useParams();
  const [address, setAddress] = useState({});
  const { editAddress } = useAddress();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/address/${addressId}`)
      .then((res) => {
        setAddress(res.data.address);
        setInput(res.data.address);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  }, []);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e, addressId, input) => {
    try {
      e.preventDefault();
      await editAddress(input, addressId);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    console.log(input);
  };

  return (
    <>
      {/* <h1 className="m-auto mt-10 ">Please fill in the information below:</h1> */}
      <div className=" m-auto mt-10 w-[600px] p-10  ">
        <h1 className="text-[15px] mb-4 font-medium ">
          Please fill in the information below:
        </h1>
        <div className="flex flex-col gap-3 w-[100%]">
          <div className="flex gap-3 justify-between">
            <AddressInput
              placeholder={"Firstname"}
              name="firstName"
              value={input?.firstName}
              onChange={handleChangeInput}
            />
            <AddressInput
              placeholder={"Lastname"}
              name="lastName"
              value={input?.lastName}
              onChange={handleChangeInput}
            />
          </div>
          <AddressInput
            placeholder={"Phone number"}
            name="phoneNumber"
            value={input?.phoneNumber}
            onChange={handleChangeInput}
          />
          <AddressInput
            placeholder={"Address1"}
            name="address1"
            value={input?.address1}
            onChange={handleChangeInput}
          />
          <AddressInput
            placeholder={"Address2"}
            name="address2"
            value={input?.address2}
            onChange={handleChangeInput}
          />
          <div className="flex gap-3 justify-between">
            <AddressInput
              placeholder={"City"}
              name="city"
              value={input?.city}
              onChange={handleChangeInput}
            />
            <AddressInput
              placeholder={"Zipcode"}
              name="zipCode"
              value={input?.zipCode}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <AddressButton
          buttonName={"Save address"}
          onClick={(e) => {
            handleSubmitForm(e, addressId, input);
          }}
        />
        {/* </div> */}
      </div>
    </>
  );
}
