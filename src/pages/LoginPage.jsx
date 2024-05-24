import { useState } from "react";
import GenerateButton from "../features/auth/register/GenerateButton";
import InputErrorMessage from "../features/auth/register/InputErrorMessage";
import RegisterInput from "../features/auth/register/RegisterInput";
import RegisterSubmitButton from "../features/auth/register/RegisterSubmitButton";
import { useAuth } from "../hook/use-auth";
import Joi from "joi";
import ShowUsername from "../features/auth/register/ShowUsername";
// import { login } from "../../../../address-backend/nodejs-address-backend/src/controller/auth-controller";

export default function LoginPage() {
    const { login } = useAuth();
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState({});

    const loginSchema = Joi.object({
        username: Joi.string()
            .trim()
            .pattern(/^[a-zA-Z0-9]{4,30}$/)
            .required(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{4,30}$/)
            .trim()
            .required(),
    });

    const validateLogin = (input) => {
        const { error } = loginSchema.validate(input, { abortEarly: false });
        if (error) {
            const result = error.details.reduce((acc, el) => {
                const { message, path } = el;
                acc[path[0]] = message;
                return acc;
            }, {});
            return result;
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const validateError = validateLogin(input);
        if (validateError) {
            setError(validateError);
        }
        setError({});
        login(input).catch((err) => {
            console.log(err.response.data);
            setError({ email: err.response.data.message });
        });
    };

    return (
        <>
            <div className=" gap-3 m-auto w-[500px] p-14 rounded-xl flex-col bg-neutral-100 ">
                <div>
                    <h1 className="text-[40px] mb-10 w-full flex justify-center font-bold">
                        Login
                    </h1>
                </div>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmitForm}
                >
                    <div className="grid grid-cols-2">
                        {error.email && (
                            <InputErrorMessage message={error.email} />
                        )}
                    </div>
                    <RegisterInput
                        placeholder={"Username"}
                        name="username"
                        value={input?.username}
                        onChange={handleChangeInput}
                        hasError={error.username}
                    />
                    {/* onChange={handleChangeInput}
                    hasError={error.username} */}
                    {/* <div className="grid grid-cols-2">
                        {error.username && (
                            <InputErrorMessage message={error.username} />
                        )}
                    </div> */}
                    <RegisterInput
                        placeholder={"Password"}
                        name="password"
                        value={input?.password}
                        onChange={handleChangeInput}
                        hasError={error.password}
                    />
                    <RegisterSubmitButton
                        buttonName={"Login"}
                        onClick={(e) => handleSubmitForm(e, input)}
                    />
                </form>
            </div>
        </>
    );
}
