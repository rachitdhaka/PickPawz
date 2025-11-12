"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

export function SignupFormDemo() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const data = {firstname, lastname, email, password};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://pickpawz-server.onrender.com/adopter/signup',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Signup successful:", response.data);
      toast.success("Account created successfully! Please login.");
      navigate('/adopt/login');
    } catch (error) {
      console.error("There was an error signing up:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          toast.error(error.response?.data?.message || 'Access denied. Please try again.');
        } else if (error.response?.status === 409) {
          toast.error('Email already exists. Please use a different email or login.');
        } else if (error.response) {
          toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
        } else {
          toast.error('Network error. Please check your connection.');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="shadow-input mx-auto h-fit w-full max-w-md rounded-none bg-white p-4 sm:p-6 md:p-8 md:rounded-2xl dark:bg-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-neutral-200 dark:border-neutral-900">
      <h2 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to PickPawz
      </h2>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Signup to PickPawz
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </LabelInputContainer>


        <button
          className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner className="size-4" />
              Signing up...
            </span>
          ) : (
            <>
              Sign up &rarr;
            </>
          )}
          <BottomGradient />
        </button>

      </form>
        <div>
          <p className="mt-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">Dont Have an account ? <span className="cursor-pointer text-blue-400" onClick={()=>navigate('/adopt/login')}>Login</span></p>
        </div>
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
