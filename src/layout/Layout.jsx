import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
  <>
  <div>
    <div className="w-[100%] h-[40px] bg-black  mb-20 flex"/>
    <Outlet/>
  </div>

  </>
  );
}