import { Link } from "react-router-dom";
import OnboardingHeader from "../shared/OnboardingHeader";
import OnboardingFooter from "../shared/OnboardingFooter";
import { IconContext } from "react-icons";
import { SlEnvolope, SlLock, SlUser, SlKey } from "react-icons/sl";
import { styled } from "@mui/system";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { ProgressBar } from "react-loader-spinner";
const FormInnerBoxes = styled("div")({
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "center",
    borderRadius: "3px",
    overflow: "hidden",
    width: "50%",
    height: "3rem"
})

const InputIconContainer = styled("div")({
    display: "flex",
    alignSelf: "stretch",
    backgroundColor: "#ff474b",
    alignItems: "center",
    justifyContent: "center"
})

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const [verificationCode, setVerificationCode] = useState("");
    const [role, setUserRole] = useState();

    const { register, error, isLoading } = useRegister();


    async function handleRegister(e) {
        e.preventDefault();
        console.log(firstname, lastname, email, password, role, verificationCode);
        await register(firstname, lastname, email, password, role, verificationCode);

        // console.log(email, password, firstname, lastname, verificationCode);
    }
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
            <OnboardingHeader />
            <main className=" flex flex-col flex-grow justify-center items-center text-center px-4">
                <div class="w-1/2 h-1/2 py-4 space-y-8 items-center">
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                        Register a new account
                    </h2>
                    <form
                        className="flex flex-col mt-6 space-y-3"
                        onSubmit={handleRegister}
                    >
                        <div className="flex flex-col items-center justify-center">
                            {/* Name */}
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <SlUser />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="text" placeholder="Firstname" required onChange={(e) => setFirstname(e.target.value)} value={firstname} className="flex-1 p-2 border-none outline-none w-full h-full" />
                                <input type="text" placeholder="Surname" required onChange={(e) => setLastname(e.target.value)} value={lastname} className="flex-1 p-2 border-l border-slate-300 outline-none w-full h-full" />
                            </FormInnerBoxes>
                            {/* Email */}
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <SlEnvolope />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required value={email} className="flex-1 p-2 border-none outline-none w-full h-full" />
                            </FormInnerBoxes>
                            {/* Password */}
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <SlLock />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} className="flex-1 p-2 border-none outline-none w-full h-full" />
                            </FormInnerBoxes>
                            {/* Verification Code */}
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <SlKey />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="text" placeholder="Verification Code" required onChange={(e) => setVerificationCode(e.target.value)} value={verificationCode} className="flex-1 p-2 border-none outline-none w-full h-full" />
                            </FormInnerBoxes>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="flex gap-3 items-center justify-center">
                                <div className="flex">
                                    <input type="radio" id="login-teacher-radio" onClick={() => setUserRole("teacher")} name="user-type-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    <label for="login-teacher-radio" className="px-1">Teacher</label>
                                </div>
                                <div className="flex">
                                    <input id="login-student-radio" onClick={() => setUserRole("student")} type="radio" name="user-type-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    <label for="login-student-radio" className="px-1">Student</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button type="submit" disabled={isLoading} className="flex items-center justify-center w-1/3 px-3.5 py-2.5 rounded-md mt-1 bg-[#ff676a]  text-sm font-semibold text-white shadow-sm hover:bg-[#ff9596] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                { !isLoading ? "Register" :  
                                    <ProgressBar visible={true}
                                    width= "300"
                                    barColor="#2563eb"
                                    borderColor="#ffffff"
                                    ariaLabel="progress-bar-loading" />
                                }
                            </button>
                            {
                                error &&
                                <div className="text-red-400">
                                    {error}
                                </div>
                            }
                        </div>
                    </form>
                    <div className="text-center">
                        Already have an account?&nbsp;
                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Login
                        </Link>
                    </div>
                </div>
            </main>
            <OnboardingFooter />
        </div>
    );
}