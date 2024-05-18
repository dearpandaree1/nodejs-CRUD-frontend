export default function AddressContainer({
  firstName,
  lastName,
  phoneNumber,
  address1,
  address2,
  city,
  zipCode,
  country,
  province,
  onClickRemove,
  onClickEdit,
  onClick,
}) {
  return (
    <>
      <div
        className="w-[350px] h-[230px] m-auto mt-10 p-8 border-2 cursor-pointer border-neutral-200 text-[16px] flex flex-col gap-[5px] shadow-2xl"
        onClick={onClick}
      >
        <div className="flex gap-3 ">
          <div className="">{firstName}</div>
          <div className="">{lastName}</div>
        </div>
        <div className="">{phoneNumber}</div>
        <div className="">{address1}</div>
        <div className="">{address2}</div>
        <div className="flex gap-3 ">
          <div className="">{city}</div>
          <div className="">{zipCode}</div>
        </div>
        <div className="flex gap-3 ">
          <div className="">{country}</div>
          <div className="">{province}</div>
        </div>
        <div className="flex gap-5 underline text-sm mt-2 ">
          <button className="cursor-pointer" onClick={onClickEdit}>
            Edit
          </button>
          <button className="cursor-pointer" onClick={onClickRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
