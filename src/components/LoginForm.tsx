"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function LoginForm() {
  const navigate = useNavigate();
  const [email , setEmail] = React.useState("");
  const [password , setPassword] = React.useState("");

  const data = {email , password};
  const handleSubmit = async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://pickpawz-server.onrender.com/adopter/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Login successful:", response.data);

      if(response.data.token && response.data.firstname){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('firstname', response.data.firstname);

        // Dispatch custom event to notify navbar of auth state change
        window.dispatchEvent(new Event('authStateChange'));

        navigate("/profile");
      } else {
        console.error("Token or firstname missing in response");
        alert("Login successful but response incomplete. Please try again.");
      }

    } catch (error) {
      console.error("There was an error logging in:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          const errorMsg = error.response?.data?.message || 'Access denied. Please check your credentials.';
          alert(errorMsg);
        } else if (error.response?.status === 401) {
          alert('Invalid email or password.');
        } else if (error.response) {
          alert(`Error: ${error.response?.data?.message || 'Login failed. Please try again.'}`);
        } else {
          alert('Network error. Please check your connection.');
        }
      }
    }

  };
  return (
    <div className="shadow-input mx-auto h-fit w-full max-w-md rounded-none border-4 border-neutral-200 dark:border-neutral-900 bg-white p-4 sm:p-6 md:p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:rounded-2xl dark:bg-black">
      <h2 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity - Login
      </h2>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Tyler" type="text"  />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div>
          <p className="mt-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
           Don't Have an account ? Create One {" "}
            <span
              className="cursor-pointer text-blue-400"
              onClick={() => navigate("/adopt/signup")}
            >
              Signup
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
