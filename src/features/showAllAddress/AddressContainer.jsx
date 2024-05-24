export default function AddressContainer({
  firstName,
  lastName,
  phoneNumber,
  address1,
  address2,
  city,
  zipCode,
  onClickRemove,
  onClickEdit,
}) {
  function CapitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="w-[350px] h-[240px] m-auto mt-10 p-8 border-2  border-neutral-200 text-[16px] flex flex-col gap-[5px] shadow-2xl">
        <div className="flex gap-5 font-semibold ">
          <div className="">{CapitalizeFirstLetter(firstName)}</div>
          <div className="">{CapitalizeFirstLetter(lastName)}</div>
        </div>
        <div className="text-">{phoneNumber}</div>
        <div className="">{CapitalizeFirstLetter(address1)}</div>
        <div className="">{CapitalizeFirstLetter(address2)}</div>
        <div className="flex gap-3 ">
          <div className="">{CapitalizeFirstLetter(city)}</div>
          <div className="">{zipCode}</div>
        </div>

        <div className="flex gap-6 underline text-sm  text-neutral-500 mt-2 ">
          <button className="cursor-pointer pr-3" onClick={onClickEdit}>
            Edit
          </button>
          <button className="cursor-pointer px-3" onClick={onClickRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
