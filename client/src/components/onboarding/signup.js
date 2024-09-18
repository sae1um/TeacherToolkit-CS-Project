import { Link } from "react-router-dom";
import OnboardingHeader from "../shared/onboardingHeader";
import OnboardingFooter from "../shared/onboardingFooter";
import { IconContext } from "react-icons";
import { SlEnvolope, SlLock } from "react-icons/sl";
import { styled } from "@mui/system";

const FormInnerBoxes = styled("div")({
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "center",
    borderRadius: "3px",
    overflow: "hidden"
})

const InputIconContainer = styled("div")({
    display: "flex",
    alignSelf: "stretch",
    backgroundColor: "#ff474b",
    alignItems: "center",
    justifyContent: "center"
})

export default function RegisterPage(){
    function handdleSubmit(){}
    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
            <OnboardingHeader />
            <main className=" flex flex-col flex-grow justify-center items-center text-center px-4">
                <div class="w-1/2 h-1/2 py-4 space-y-8 items-center">
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                        Register a new account
                    </h2>
                    <form className="flex flex-col mt-6 space-y-3" onSubmit={handdleSubmit}>
                        <div className="flex flex-col items-center justify-center">
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white"}}>
                                            <SlEnvolope />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="email" placeholder="Email" className="flex-1 p-2 border-none outline-none" />
                            </FormInnerBoxes>
                            <FormInnerBoxes>
                                <InputIconContainer>
                                    <div className="py-2 px-3">
                                        <IconContext.Provider value={{ color: "white"}}>
                                            <SlLock />
                                        </IconContext.Provider>
                                    </div>
                                </InputIconContainer>
                                <input type="password" placeholder="Password" className="flex-1 p-2 border-none outline-none" />
                            </FormInnerBoxes>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="flex gap-3 items-center justify-center">
                                <div className="flex">
                                    <input type="radio" id="login-teacher-radio" name="user-type-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    <label for="login-teacher-radio" className="px-1">Teacher</label>
                                </div>
                                <div className="flex">
                                    <input id="login-student-radio" type="radio" name="user-type-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    <label for="login-student-radio" className="px-1">Student</label>
                                </div>
                            </div>
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