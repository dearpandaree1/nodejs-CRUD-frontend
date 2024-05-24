import { useState } from "react";
import GenerateButton from "../features/auth/register/GenerateButton";
import InputErrorMessage from "../features/auth/register/InputErrorMessage";
import RegisterInput from "../features/auth/register/RegisterInput";
import RegisterSubmitButton from "../features/auth/register/RegisterSubmitButton";
import { useAuth } from "../hook/use-auth";
import Joi from "joi";

export default function RegisterPage() {
    const { handleGenerateClick, suggestedUsername, register } = useAuth();
    const [input, setInput] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [error, setError] = useState({});

    const registerSchema = Joi.object({
        username: Joi.string()
            .trim()
            .pattern(/^[a-zA-Z0-9]{4,30}$/)
            .required(),
        email: Joi.string().trim().email({ tlds: false }).required(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{4,30}$/)
            .trim()
            .required(),
    });

    const validateRegister = (input) => {
        const { error } = registerSchema.validate(input, { abortEarly: false });
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
        const validateError = validateRegister(input);
        if (validateError) {
            setError(validateError);
        }
        setError({});
        register(input).catch((err) => {
            console.log(err.response.data);
            setError({ email: err.response.data.message });
        });
    };

    return (
        <>
            <div className=" gap-3 m-auto w-[500px] p-3 flex-col">
                <div>
                    <h1 className="text-[40px] mb-10 font-bold">Register</h1>
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
                        placeholder={"Email"}
                        name="email"
                        value={input?.email}
                        onChange={handleChangeInput}
                        hasError={error.email}
                    />

                    <div className="flex flex-row gap-2">
                        <RegisterInput
                            placeholder={"Username"}
                            name="username"
                            value={input?.username || suggestedUsername}
                            onChange={handleChangeInput}
                            hasError={error.username}
                        />
                        {/* <div className="mt-0">username</div> */}
                        <GenerateButton
                            buttonName={"Generate"}
                            onClick={() => handleGenerateClick(input.email)}
                        />
                    </div>
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
                    {/* <RegisterInput
                        placeholder={"Confirm Password"}
                        name="rePassword"
                        // value={input?.rePassword}
                        onChange={handleChangeInput}
                    /> */}
                    <RegisterSubmitButton
                        buttonName={"Register"}
                        // onClick={(e) => handleSubmitForm(e, input)}
                    />
                </form>
            </div>
        </>
    );
}
