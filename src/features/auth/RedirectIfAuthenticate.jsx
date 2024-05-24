import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook/use-auth";

export default function RedirectIfAuthenticate() {
    const { authUser } = useAuth;
    console.log(authUser);
    if (authUser) {
        return <Navigate to="/"></Navigate>;
    }
}
