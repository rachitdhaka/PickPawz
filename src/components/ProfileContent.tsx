import banner from "../assets/banner.png";
import profile from "../assets/dp.jpg";
import Footer from "./Footer";
import { Button } from "./ui/button";
import React, { useEffect } from "react";
import { PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileContent = () => {


  const [Profession, setProfession] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [HouseFamily, setHouseFamily] = React.useState("");
  const [ReasonToAdopt, setReasonToAdopt] = React.useState("");
  const [name , setName] = React.useState("");
  const [location, setLocation] = React.useState("");

  const navigate = useNavigate();
  useEffect(() => {

    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://pickpawz-server.onrender.com/adopter/getProfile",
          {
            headers: {
              token: token,
            },
          },
        );
        console.log("Full response:", response.data);
        const profileData = response.data;
        const adopterData = profileData.adopterData;





        // Check if adopterData exists before accessing properties
        if (adopterData) {
          setName((adopterData.firstname ) + " " + ( adopterData.lastname || ""));
          setLocation((adopterData.city)+" " + (adopterData.state || "") || "");
          setProfession(adopterData.profession || "");
          setDescription(adopterData.aboutMe || "");
          setPhone(adopterData.phone || "");
          setEmail(adopterData.email || "");
          setHouseFamily(adopterData.houseAndFamily || "");
          setReasonToAdopt(adopterData.reasonForAdoption || "");

        } else {
          console.error("adopterData is null or undefined");
          console.log("Check if token exists:", localStorage.getItem("token"));
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center px-4">
      {/* Main Section , Photo , info , contact */}
      <div className="bg-card text-card-foreground mt-20 md:mt-40 w-full max-w-5xl rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* Banner */}
        <div className="h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-t-2xl">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex flex-col md:flex-row md:justify-evenly p-4 sm:p-6 md:p-10 gap-4 md:gap-0">
          {/* image wala div */}
          <div className="dark:border-border -mt-12 sm:-mt-16 md:-mt-24 h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg mx-auto md:mx-0">
            <img
              src={profile}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
          {/* content wala div */}
          <div className="flex flex-col md:flex-row w-full md:w-fit items-start p-4 justify-between gap-4 md:gap-8 mt-4 md:mt-0">
            {/* profile image - negative margin to overlap banner */}

            {/* Info */}
            <div className="w-full md:w-auto ">
              <p className="text-card-foreground text-xl sm:text-2xl md:text-3xl font-bold">

                {name}
              </p>
              <p className="text-sm sm:text-base md:text-md text-muted-foreground">{Profession}</p>
              <p className="text-sm sm:text-base md:text-md text-muted-foreground">{Description}</p>
            </div>

            {/* Contact */}
            <div className="text-sm sm:text-base md:text-md text-card-foreground w-full md:w-auto">
              <p>Contact: {Email}</p>
              <p>Phone: {Phone}</p>
              <p>Location: {location}</p>
            </div>
          </div>

          {/* edit button */}
          <div className="absolute top-4 right-4 md:static">
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
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-2 md:gap-2 py-4">
        {/* left side  */}

        <div className="bg-background dark:bg-card w-full md:w-[50%] rounded-xl p-4 sm:p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <p className="text-xl sm:text-2xl font-bold">House & Family Details</p>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-md mt-2">{HouseFamily}</p>
          </div>
        </div>
        {/* right side */}
        <div className="bg-background dark:bg-card w-full md:w-[50%] rounded-xl p-4 sm:p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <p className="text-xl sm:text-2xl font-bold">Reason to Adopt</p>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-md mt-2">{ReasonToAdopt}</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProfileContent;
