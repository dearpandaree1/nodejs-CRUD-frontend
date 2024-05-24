export default function Button({ buttonName, onClick }) {
    return (
        <button
            className="bg-neutral-600 block px-5 py-2 rounded-md cursor-pointer text-white text-sm font-semibold"
            onClick={onClick}
        >
            {buttonName}
        </button>
    );
}
