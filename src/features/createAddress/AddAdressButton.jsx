import CreateProductForm from "./CreateAddressForm";
import { useState } from "react";
import Modal from "./Modal";
import CreateAddressForm from "./CreateAddressForm";

export default function AddAddressButton({ buttonName }) {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <button
        className=" m-auto bg-black w-[150px] px-4 py-4 mt-11 rounded-full cursor-pointer text-white text-sm font-bold flex justify-center mb-16"
        onClick={() => setIsOpen(true)}
      >
        {buttonName}
      </button>
      <Modal
        title="Create product"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CreateAddressForm />
      </Modal>
    </>
  );
}
