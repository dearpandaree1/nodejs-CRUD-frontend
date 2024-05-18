export default function AddressInput({
  placeholder,
  // value,
  // onChange,
  // name,
}) {
    return (
        <input
          // className="border border-neutral-200 rounded-md p-3 w-full"
          placeholder={placeholder}
        //   value={value}
        //   onChange={onChange}
          name={name}
          className={`block w-full bg-[#f6f6f6] rounded-md px-4 py-3 outline-none border border-gray-300 focus focus:ring-2 focus:ring-black`}
        />
      )
    }