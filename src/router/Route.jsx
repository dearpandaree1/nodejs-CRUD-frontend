import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AddressPage from "../pages/AddressPage";
import Layout from "../layout/Layout";
import EditAddressPage from "../pages/EditAddressPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <AddressPage /> },
      { path: "address/:addressId", element: <EditAddressPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
