import banner from "../assets/banner.png";
import profile from "../assets/dp.jpg";
import Footer from "./Footer";
import { Button } from "./ui/button";

import { PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProfileContent = () => {
  const navigate = useNavigate();
  return (
    <div className="  flex min-h-screen flex-col items-center ">
      {/* Main Section , Photo , info , contact */}
      <div className="bg-card text-card-foreground mt-40 w-full max-w-5xl rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* Banner */}
        <div className="h-56 w-full overflow-hidden rounded-t-2xl">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex justify-evenly p-10">
          {/* image wala div */}
          <div className="dark:border-border -mt-24 h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <img
              src={profile}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
          {/* content wala div */}
          <div className="flex w-fit items-start justify-between gap-8">
            {/* profile image - negative margin to overlap banner */}

            {/* Info */}
            <div>
              <p className="text-card-foreground text-3xl font-bold">
                Rachit Dhaka
              </p>
              <p className="text-md text-muted-foreground">Software Engineer</p>
              <p className="text-md text-muted-foreground">
                Love Cats and Dogs
              </p>
            </div>

            {/* Contact */}
            <div className="text-md text-card-foreground">
              <p>Contact: rachit@example.com</p>
              <p>Phone: +1 234 567 8901</p>
              <p>Location: San Francisco, CA</p>
            </div>
          </div>

          {/* edit button */}
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/edit")}
              className="mt-2 h-10 cursor-pointer"
            >
              <PenLine />
            </Button>
          </div>
        </div>
      </div>


      {/*  About  , location , family , work*/}
      <div className=" flex w-5xl gap-2 py-4 ">
        {/* left side  */}

        <div className="w-[50%] rounded-xl  bg-background shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 dark:bg-card">
          <div>
            <p className="text-2xl font-bold">House & Family Details</p>
          </div>

          <div>
            <p className="text-md mt-2">
              I live in a spacious 3-bedroom house with a large backyard,
              perfect for pets to play and explore. My family consists of
              myself, my spouse, and our two children who are all animal lovers.
              We have a routine that ensures pets get plenty of exercise and
              attention throughout the day.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="w-[50%] bg-background shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-xl dark:bg-card">
          <div>
            <p className="text-2xl font-bold">Reason to Adopt</p>
          </div>

          <div>
            <p className="text-md mt-2">
              I have always had a deep love for animals and believe that
              adopting a pet is a wonderful way to provide a loving home to an
              animal in need. I am committed to giving my adopted pet the best
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProfileContent;
