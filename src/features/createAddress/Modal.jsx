export default function Modal({
  children,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-neutral-500 opacity-70 z-30"></div>
          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">
              <div className="rounded-lg bg-white shadow-2xl border w-[50%] flex flex-col">
                {/* <div className="flex justify-between p-4 text-xl border-b"> */}
                <div className="invisible">X</div>
                <div className="w-full">
                  <div className="text-gray-500 flex justify-end mr-10">
                    <div className="cursor-pointer " onClick={onClose}>
                      X
                    </div>
                  </div>
                </div>
                {/* </div> */}
                <div className="">
                  <div className="">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
