export default function RegisterSubmitButton({ buttonName, onClick }) {
    return (
        <button
            className="bg-orange-400 block w-full py-2 mt-5 mb-3 rounded-full cursor-pointer text-white text-lg font-semibold"
            onClick={onClick}
        >
            {buttonName}
        </button>
    );
}
