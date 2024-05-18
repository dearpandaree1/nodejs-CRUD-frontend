export default function AddressSubmitButton({ buttonName }) {
    return (
      <button className="bg-black block w-full px-4 py-4 mt-6 mb-10 rounded-full cursor-pointer text-white text-sm font-semibold">
        {buttonName}
      </button>
    );
  }