import { useState } from "react";
// import { useAuth } from "../../../hooks/use-auth";
// import Joi from "joi";
import AddressInput from "../editAddress/AddressInput";
import AddressSubmitButton from "../editAddress/AddressSubmitButton";
// import CreateProductInputArea from "./CreatProductInputArea";
// import InputErrorMessage from "../../auth/InputErrorMessage";
// import ButtonBlack from "../../ButtonBlack";
// import { useAdmin } from "../../../hooks/use-admin";
// import Loading from "../../../components/Loading";

// const createProductSchema = Joi.object({
//   enumCategory: Joi.string().trim().required(),
//   productName: Joi.string().required(),
//   description: Joi.string(),
//   price: Joi.number().required(),
// });

// const validateProduct = (input) => {
//   const { error } = createProductSchema.validate(input, { abortEarly: false });
//   console.log(error);
//   if (error) {
//     const result = error.details.reduce((acc, el) => {
//       const { message, path } = el;
//       acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };

export default function CreateAddressForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [file, setFile] = useState(null);
  // const { createProduct, getProduct } = useAdmin();
  const [input, setInput] = useState({
    enumCategory: "",
    productName: "",
    description: "",
    price: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // const validateError = validateProduct(input);
      // console.log(validateError);
      // if (validateError) {
      //   return setError(validateError);
      // }
      // setError({});

      const formData = new FormData();
      formData.append("firstName", input.firstName)
      formData.append("lastName", input.lastName)
      formData.append("phoneNumber", input.phoneNumber)
      formData.append("address1", input.address1)
      formData.append("address2", input.address2)
      formData.append("city", input.city)
      formData.append("zipCode", input.zipCode)
      formData.append("country", input.country)
      formData.append("province", input.province)
      console.log(input.productName);
      setIsLoading(true);
      await 
      // createProduct(formData);
      // getProduct();
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
                    placeholder={"City"} name="city" 
                    value={input.city} 
                    onChange={handleChangeInput}
                    />
                    <AddressInput 
                    placeholder={"Zip code"} name="zipCode" 
                    value={input.zipCode} 
                    onChange={handleChangeInput}
                    />
          </div>

          <AddressInput 
                placeholder={"Country"} name="country" 
                value={input.country} 
                onChange={handleChangeInput}
                />
                <AddressInput 
                placeholder={"Province"} name="province" 
                value={input.province} 
                onChange={handleChangeInput}
                />
          

          <div className="mt-2">
          <AddressSubmitButton 
        buttonName={"Save address"} 
        // onClick={(e)=> handleSubmitForm(e, addressId, input)} 
        />
          </div>
        </div>
      </form>
    </>
  );
}
