import banner from "../assets/banner.png";
import profile from "../assets/dp.jpg";
import Footer from "./Footer";
import { Button } from "./ui/button";
import React, { useEffect } from "react";
import { PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileContent = () => {
  const navigate = useNavigate();

  const [Profession, setProfession] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [HouseFamily, setHouseFamily] = React.useState("");
  const [ReasonToAdopt, setReasonToAdopt] = React.useState("");

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
        const profileData = response.data;
        const adopterData = profileData.adopterData;

        // Access firstname
       

        setProfession(adopterData.Profession);
        setDescription(adopterData.Description);
        setPhone(adopterData.Phone);
        setEmail(adopterData.Email);
        setHouseFamily(adopterData.HouseFamily);
        setReasonToAdopt(adopterData.ReasonToAdopt);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
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
              <p className="text-md text-muted-foreground">{Profession}</p>
              <p className="text-md text-muted-foreground">{Description}</p>
            </div>

            {/* Contact */}
            <div className="text-md text-card-foreground">
              <p>Contact: {Email}</p>
              <p>Phone: {Phone}</p>
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
      <div className="flex w-5xl gap-2 py-4">
        {/* left side  */}

        <div className="bg-background dark:bg-card w-[50%] rounded-xl p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <p className="text-2xl font-bold">House & Family Details</p>
          </div>

          <div>
            <p className="text-md mt-2">{HouseFamily}</p>
          </div>
        </div>
        {/* right side */}
        <div className="bg-background dark:bg-card w-[50%] rounded-xl p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <p className="text-2xl font-bold">Reason to Adopt</p>
          </div>

          <div>
            <p className="text-md mt-2">{ReasonToAdopt}</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProfileContent;
