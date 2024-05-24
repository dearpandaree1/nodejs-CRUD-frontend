export default function RegisterInput({
    placeholder,
    value,
    onChange,
    name,
    hasError,
}) {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className={`block w-full h-8 bg-[#f6f6f6] rounded-md px-4 py-5 outline-none border border-gray-300 focus  focus:ring ${
                hasError
                    ? "bg-blue-100 border-black focus:ring focus:ring-black"
                    : "focus:ring-2 focus:ring-black"
            }`}
        />
    );
}
