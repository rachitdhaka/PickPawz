import { ModeToggle } from "@/components/mode-toggle";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import { ThemeProvider } from "../../../components/theme-provider";
import { LoginForm } from "@/components/LoginForm";
const SignUpPage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

     <div>
        <div className="fixed top-0 right-0 z-20 p-4">
          <ModeToggle />
        </div>
        <div className="relative z-10 flex h-screen items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <LoginForm />
        </div>
      </div>


    </ThemeProvider>
  );
};

export default SignUpPage;
