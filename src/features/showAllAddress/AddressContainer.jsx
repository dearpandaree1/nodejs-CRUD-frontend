export default function AddressContainer({
    firstName,
    lastName,
    phoneNumber,
    address1,
    address2,
    city,
    zipCode,
    country,
    province
    // onClickRemove,
    // onClickEdit,

}) {
    return <>
    <div 
    className="w-[400px] h-[230px] m-auto mt-10 p-8 border-2 border-neutral-200 text-[16px] flex flex-col gap-[5px] "

    >
        <div className="flex gap-3 ">
            <div className="">productName</div>
            <div className="">productDescription</div>
        </div>
        <div className="">price</div>       
        <div className="">price</div>       
        <div className="">price</div>        
        <div className="">price</div>       
        <div className="flex gap-5 underline text-sm mt-2 ">
            <button className="cursor-pointer"
            // onClick={onClickEdit}
            >Edit</button>
            <button className="cursor-pointer"
            //  onClick={onClickRemove}
             >Remove</button>
        </div>
    </div>
    </>
}