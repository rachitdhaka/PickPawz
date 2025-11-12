import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "../../../components/theme-provider";
import { LoginForm } from "@/components/LoginForm";
const SignUpPage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background relative min-h-screen w-full">
        {/* Bottom Fade Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, var(--color-border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
      `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          }}
        />
        {/* Your Content/Components */}
        <div>
          <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-20 p-2 sm:p-4">
            <ModeToggle />
          </div>
          <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignUpPage;
