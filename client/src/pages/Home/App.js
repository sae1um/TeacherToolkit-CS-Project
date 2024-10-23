import { Link } from "react-router-dom"
import OnboardingHeader from "../../components/shared/OnboardingHeader";
import OnboardingFooter from "../../components/shared/OnboardingFooter";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
      <OnboardingHeader />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to Teacher Toolkit
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your all-in-one platform for managing classes, assignments, and student progress.
          </p>
          <div className="flex flex-col mt-6 space-y-3">
              <Link to={"/login"} className="rounded-md bg-[#4276d0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7991ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Login</Link>
              <Link to={"/register"} className="rounded-md bg-[#ffff] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#d1d1d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Register</Link>
          </div>
        </div>
      </main>
        <OnboardingFooter />
    </div>
  )
}