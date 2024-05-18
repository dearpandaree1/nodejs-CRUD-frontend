import { useState } from "react";
// import { useAuth } from "../../../hooks/use-auth";
// import Joi from "joi";
import AddressInput from "../editAddress/AddressInput";
import AddressSubmitButton from "../editAddress/AddressSubmitButton";
import { useAddress } from "../../hook/use-address";

export default function CreateAddressForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const { createAddress, getAddress } = useAddress();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      // const formData = new FormData();
      // formData.append("firstName", input.firstName);
      // formData.append("lastName", input.lastName);
      // formData.append("phoneNumber", input.phoneNumber);
      // formData.append("address1", input.address1);
      // formData.append("address2", input.address2);
      // formData.append("city", input.city);
      // formData.append("zipCode", input.zipCode);
      setIsLoading(true);
      // console.log("herreeeeeeee", formData);
      console.log("handleSubmitFormInput", input);
      await createAddress(input);

      // getAddress();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      // setError({ mobile: err.response.data.message });
    } finally {
      setIsLoading(false);
    }
  };
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <form onSubmit={handleSubmitForm} className=" gap-3 m-auto w-[600px] p-3">
        <div className="">
          <h1 className="text-xl mb-3 font-bold">Create Address</h1>
          {/* <p className="text-xs mb-2">{formDescription}</p> */}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <AddressInput
              placeholder={"Firstname"}
              value={input.firstName}
              onChange={handleChangeInput}
              name="firstName"
            />

            <AddressInput
              placeholder={"Lastname"}
              value={input.lastName}
              onChange={handleChangeInput}
              name="lastName"
            />
          </div>

          <AddressInput
            placeholder={"Phone number"}
            value={input.phoneNumber}
            onChange={handleChangeInput}
            name="phoneNumber"
          />

          <AddressInput
            placeholder={"Address1"}
            value={input.address1}
            onChange={handleChangeInput}
            name="address1"
          />

          <AddressInput
            placeholder={"Address2"}
            value={input.address2}
            onChange={handleChangeInput}
            name="address2"
          />

          <div className="flex gap-3 justify-between">
            <AddressInput
              placeholder={"City"}
              name="city"
              value={input.city}
              onChange={handleChangeInput}
            />
            <AddressInput
              placeholder={"Zip code"}
              name="zipCode"
              value={input.zipCode}
              onChange={handleChangeInput}
            />
          </div>

          <div className="mt-2">
            <AddressSubmitButton
              buttonName={"Save address"}
              onClick={(e) => handleSubmitForm(e, input)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
