import React from "react";
import banner from "../assets/banner.png";
import profile from "../assets/dp.jpg";
import { SelectCom } from "./SelectCom";
import Footer from "./Footer";
const ProfileContent = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center">
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

        {/* Content area - profile should overlap the banner */}
        <div className="flex items-start justify-between gap-8 p-10 ">
          {/* profile image - negative margin to overlap banner */}
          <div className="dark:border-border -mt-24 h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <img
              src={profile}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 pl-4">
            <p className="text-card-foreground text-3xl font-bold">
              Rachit Dhaka
            </p>
            <p className="text-md text-muted-foreground">Software Engineer</p>
            <p className="text-md text-muted-foreground">Love Cats and Dogs</p>
          </div>

          {/* Contact */}
          <div className="text-md text-card-foreground">
            <p>Contact: rachit@example.com</p>
            <p>Phone: +1 234 567 8901</p>
            <p>Location: San Francisco, CA</p>
          </div>
        </div>
      </div>

      {/* Preferences  */}
      <div className="bg-card text-card-foreground mt-10 mb-30 w-full max-w-5xl rounded-2xl py-5 pl-10  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <p className="text-2xl font-bold">Adotion Preference</p>
        </div>
        <div className="flex justify-evenly pt-4">
          <SelectCom
            label="Pet Preference"
            placeholder="Select pet"
            options={[
              { value: "dog", label: "Dog" },
              { value: "cat", label: "Cat" },
              { value: "both", label: "Both" },
            ]}
          />

          <SelectCom
            label="Size"
            placeholder="Select size"
            options={[
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" },
            ]}
          />

          <SelectCom
            label="Age"
            placeholder="Select age"
            options={[
              { value: "young", label: "Young" },
              { value: "old", label: "Old" },
              { value: "medium", label: "Medium" },
            ]}
          />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProfileContent;
