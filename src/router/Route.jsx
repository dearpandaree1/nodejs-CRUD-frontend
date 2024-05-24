import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AddressPage from "../pages/AddressPage";
import Layout from "../layout/Layout";
import EditAddressPage from "../pages/EditAddressPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <AddressPage /> },
            { path: "address/:addressId", element: <EditAddressPage /> },
        ],
    },
    {
        path: "/register",
        element: <Layout />,
        children: [
            { path: "", element: <RegisterPage /> },
            // { path: "/password", element: <RegisterPage2 /> },
        ],
    },
    {
        path: "/login",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    // <RedirectIfAuthenticate>
                    <LoginPage />
                    // </RedirectIfAuthenticate>
                ),
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
