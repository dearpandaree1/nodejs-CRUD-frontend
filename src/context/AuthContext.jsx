import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
    addAccessToken,
    getAccessToken,
    removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [initialLoading, setInitialLoading] = useState(true);
    const [authUser, setAuthUser] = useState(null || getAccessToken());
    const [suggestedUsername, setSuggestedUsername] = useState([]);

    // useEffect(() => {
    //     if (getAccessToken()) {
    //         axios
    //             .get("/auth/me")
    //             .then((res) => {
    //                 setAuthUser(res.data.user);
    //             })
    //             .finally(() => {
    //                 setInitialLoading(false);
    //             });
    //     } else {
    //         setInitialLoading(false);
    //     }
    // }, []);

    // function cutUsername(email) {
    //     let i = 0;
    //     let username = "";
    //     for (i = 0; i < email.length; i++) {
    //         if (email[i] === "@") {
    //             break;
    //         }
    //         username += email[i];
    //     }
    //     return username;
    // }

    // const handleGenerateClick = (email) => {
    //     // console.log("email: ", email);
    //     // const username = cutUsername(email);
    //     console.log("email : ", email);

    //     axios
    //         .get("/auth/username", suggestedUsername)
    //         .then((res) => {
    //             return (
    //                 setSuggestedUsername(res.data.suggestedUsername),
    //                 console.log(suggestedUsername)
    //             );
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const handleGenerateClick = async (e, email) => {
        // const username = cutUsername(email);
        // eslint-disable-next-line no-useless-catch
        try {
            e.preventDefault();
            console.log("email : ", email);
            const res = await axios.get("/auth/username", suggestedUsername);
            setSuggestedUsername(res?.data?.suggestedUsername);
            console.log(suggestedUsername);
        } catch (err) {
            throw err;
        }
    };

    const register = async (input) => {
        // eslint-disable-next-line no-useless-catch
        try {
            console.log(input);
            const res = await axios.post("/auth/register", input);
            addAccessToken(res.data.accessToken);
            setAuthUser(res?.data?.user);
            console.log("accessToken", res.data.accessToken);
            console.log("authUser: ", authUser);
            console.log("register successfully");
        } catch (err) {
            throw err;
        }
    };

    const login = async (credentail) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const res = await axios.post("/auth/login", credentail);
            addAccessToken(res.data.accessToken);
            setAuthUser(res?.data?.user);
            console.log("login successfully");
        } catch (err) {
            throw err;
        }
    };
    return (
        <AuthContext.Provider
            value={{
                initialLoading,
                setInitialLoading,
                handleGenerateClick,
                suggestedUsername,
                setSuggestedUsername,
                register,
                authUser,
                setAuthUser,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
