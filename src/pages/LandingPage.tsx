import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";
import { NavbarLogo } from "../components/ui/resizable-navbar";
import LandingPageBg from "../assets/LandingAssest.png";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const navlinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/adopt/login" },

  ];
  return (
    <div className="">
      {/* Navbar */}
      <div className="mb-10 md:mb-20 border-b border-neutral-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4">
          <div className="">
            <NavbarLogo />
          </div>
          <div className="hidden md:flex">
            {navlinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="text-card-foreground hover:text-primary relative z-10 mx-4 cursor-pointer text-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto min-h-screen max-w-7xl px-4 md:px-8">
        {/* decortive lines */}
        {/* <div className="absolute inset-0 mx-auto hidden w-full max-w-7xl md:block">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-900/40"></div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-900/40"></div>
        </div> */}

        {/*  Heading and Subheading */}
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter">
            Find Your Perfect <span className="text-4xl sm:text-5xl md:text-6xl text-chart-1">Furry Friend</span>
            <br /> and Give Them a Forever Home
          </p>
          <p className="text-muted-foreground text-sm sm:text-base md:text-md font-family-manrope mb-4 md:mb-8 max-w-2xl">
            Connect with loving pets looking for their <span className="text-chart-5">forever home.</span>
            <br /> Start your journey to unconditional love and companionship
            today.
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <button
            onClick={() => navigate("/home")}
            className="bg-primary text-primary-foreground cursor-pointer rounded-lg px-4 py-2 font-semibold transition-opacity hover:opacity-90 w-full sm:w-auto"
          >
            Browse Pets
          </button>
          <button
            onClick={() => navigate("/about")}
            className="border-primary text-primary hover:bg-primary/10 rounded-lg border px-4 py-2 font-semibold transition-colors w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>

        {/* landing page images */}

        <div className="relative hidden md:block">
          <div className="bg-background absolute inset-x-0 h-180 w-full mask-b-from-10%"></div>
          <div className="relative mt-20 min-h-140 w-full translate-x-10 perspective-distant">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="perspective-[4000px]"
            >
              <img
                src={LandingPageBg}
                alt="Landing page background"
                height={1920}
                width={1080}
                className="absolute inset-0 rotate-x-20 rotate-y-20 -rotate-z-20 rounded-lg mask-r-from-50% mask-b-from-30% shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -400 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="translate-x-20 -translate-y-20 perspective-[-4000px]"
            >
              <img
                src={LandingPageBg}
                alt="Landing page background"
                height={1920}
                width={1080}
                className="absolute inset-0 rotate-x-20 rotate-y-20 -rotate-z-20 rounded-lg border-4 border-neutral-200 mask-r-from-90% mask-b-from-90% shadow-2xl dark:border-neutral-300"
              />
            </motion.div>
          </div>
        </div>

        {/* kuch tho hai data */}
      </div>

      {/* kuch tho hai section */}
      <div className="mx-auto mt-20 md:mt-40 max-w-7xl px-4 md:px-8 py-10 md:py-20 ">
        <div className="flex flex-col md:flex-row md:items-end md:justify-center gap-6 md:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
            Every Pet Deserves a Loving Home <br className="hidden md:block" /> and Love
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg text-center md:text-left">
            Thousands of cats and dogs are waiting for their second chance at
            happiness. By adopting, you're not just gaining a companion—you're
            saving a life and making room for another animal in need
          </p>
        </div>
      </div>

      {/* cards */}
      {/* <div className="mx-auto max-w-7xl px-10 py-15">
        <div className="my-20 grid grid-cols-3 gap-2">
          <LandingPageCard className="rounded-tl-3xl rounded-bl-3xl">
            <CardSkeleton  className="flex justify-center items-center">
              <img src={svg} alt="security icon" className="h-60 w-60 "/>
            </CardSkeleton>
            <CardContent>
              <CardTitle>Why Adopt?</CardTitle>
            </CardContent>
          </LandingPageCard>


          <LandingPageCard>
            <CardContent>
              <CardTitle>Adoption Process</CardTitle>
            </CardContent>
          </LandingPageCard>


          <LandingPageCard className="rounded-tr-3xl rounded-br-3xl">
            <CardContent>
              <CardTitle>Success Stories</CardTitle>
            </CardContent>
          </LandingPageCard>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
