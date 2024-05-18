import optionIcon from "../../../assets/optionIcon.png";
import useDropdown from "../../../hooks/use-dropdown";

export default function CreateProductLists({
  productDescription,
  price,
  productName,
  image,
  onClickRemove,
  onClickEdit,
}) {
  const { dropDownEl, isOpen, setIsOpen } = useDropdown();

  return (
    <>
      <div className="border h-[650px] w-[400px] rounded-[50px] flex flex-col items-center mt-16 pt-4 shadow-2xl">
        <img
          ref={dropDownEl}
          src={optionIcon}
          alt="optionIcon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 absolute translate-x-32 translate-y-4 cursor-pointer"
        />
        {isOpen && (
          <ul className="bg-white absolute translate-y-1 border rounded-lg p-2 shadow w-36">
            <li
              className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
              onClick={onClickEdit}
            >
              Edit
            </li>
            <li
              className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
              onClick={onClickRemove}
            >
              Remove
            </li>
          </ul>
        )}
        <div className="h-[350px] w-[350px] border rounded-[50px] bg-neutral-100">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col gap-4 p-7 w-[94%] ">
          <div className="text-2xl font-semibold">{productName}</div>
          <div className="w-[90%]">{productDescription}</div>
          <div className="text-xl">{price}</div>
        </div>
      </div>
    </>
  );
}
