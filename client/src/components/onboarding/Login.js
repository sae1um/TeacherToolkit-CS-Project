import { Link } from "react-router-dom";
import OnboardingHeader from "../shared/OnboardingHeader";
import OnboardingFooter from "../shared/OnboardingFooter";
import { IconContext } from "react-icons";
import { SlEnvolope, SlLock } from "react-icons/sl";
import { styled } from "@mui/system";
import { useState } from "react";
import {useLogin} from "../../hooks/useLogin"
import { ProgressBar } from "react-loader-spinner"

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

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
            <OnboardingHeader />
            <main className=" flex flex-col flex-grow justify-center items-center text-center px-4">
                <div class="w-1/2 h-1/2 py-4 space-y-8 items-center">
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <form 
                    onSubmit={handleLogin} 
                    className="flex flex-col mt-6 space-y-3"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white"}}>
                                            <SlEnvolope />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required value={email} className="flex-1 p-2 border-none outline-none w-full h-full" />
                            </FormInnerBoxes>
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white"}}>
                                            <SlLock />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} className="flex-1 p-2 border-none outline-none w-full h-full" />
                            </FormInnerBoxes>                            
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button type="submit" disabled={isLoading} 
                            className="flex items-center justify-center w-1/3 px-3.5 py-2.5 rounded-md mt-1 bg-[#ff676a]  text-sm font-semibold text-white shadow-sm hover:bg-[#ff9596] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                {
                                    !isLoading ? "Login" :
                                    <ProgressBar 
                                        visible={true}
                                        width= "300"
                                        barColor="#2563eb"
                                        borderColor="#ffffff"
                                        ariaLabel="progress-bar-loading" 
                                    />
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
                        Don't have an account?&nbsp;
                        <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                            Register here
                        </Link>
                    </div>
                </div>
            </main>
            <OnboardingFooter />
        </div>
    );
}