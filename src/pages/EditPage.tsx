import React from "react";
import {
  Heading,
  Title,
  InputBox,
  TextAreaBox,
} from "@/components/EditPageCom";
import { NavbarMain } from "@/components/NavbarMain";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const EditPage = () => {
  const navigate = useNavigate();

  const [Profession, setProfession] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [HouseFamily, setHouseFamily] = React.useState("");
  const [ReasonToAdopt, setReasonToAdopt] = React.useState("");

  const data = {
    Profession,
    Description,
    Phone,
    Email,
    HouseFamily,
    ReasonToAdopt,
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try{
      const response = await axios.put('https://pickpawz-server.onrender.com/adopter/editProfile', data, {
        headers: {
          'token': token
        },

      });
      console.log("Profile saved successfully:", response.data);
      alert("Profile saved successfully!");
      navigate("/profile");

    }
    catch(error){
      console.error("There was an error saving the profile:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          alert("Access denied. Please log in again.");

        } else {
          alert(`Error: ${error.response?.data?.message || 'Failed to save profile'}`);
        }
      }
    }

  };
  return (
    <div>
      <NavbarMain />

      {/* top div  */}
      <div className="mx-auto mt-40 flex max-w-7xl gap-2 p-4">
        {/* left side */}
        <div className="min-w-[50%] rounded-2xl border-2 p-4">

            <Heading className="mb-5">Personal Information</Heading>



          <form className="flex flex-col gap-2">
            <div className="ml-10 flex items-center justify-start">
              <Title className="">Profession</Title>
              <InputBox className="ml-10" value={Profession} onChange={(e)=>setProfession(e.target.value)}></InputBox>
            </div>
            <div className="ml-10 flex items-center justify-start">
              <Title className="">Description</Title>
              <InputBox className="ml-8" value={Description} onChange={(e)=>setDescription(e.target.value)}></InputBox>
            </div>
          </form>
        </div>

        {/* right side */}
        <div className="min-w-[50%] rounded-2xl border-2 p-4">
          <Heading className="mb-5">Contact Information</Heading>

          <form className="flex flex-col gap-2">
            <div className="ml-10 flex items-center justify-start">
              <Title className="">Phone</Title>
              <InputBox className="ml-10" value={Phone} onChange={(e)=>setPhone(e.target.value)}  ></InputBox>
            </div>
            <div className="ml-10 flex items-center justify-start">
              <Title className="">Email</Title>
              <InputBox className="ml-12" value={Email} onChange={(e)=>setEmail(e.target.value)}></InputBox>
            </div>
          </form>
        </div>
      </div>

      {/* second div */}
      <div className="mx-auto flex max-w-7xl gap-2 p-4">
        {/* left side */}
        <div className="min-w-full rounded-2xl border-2 p-4">
          <Heading className="mb-5">Personal Information</Heading>

          <form className="flex max-w-full justify-evenly gap-2 ">


            <div className="flex flex-col gap-2  p-2 min-w-[50%]">
              <Title className="">House & Family</Title>
              <TextAreaBox value={HouseFamily} onChange={(e)=>setHouseFamily(e.target.value)}></TextAreaBox>
            </div>

            <div className="flex flex-col gap-2  p-2 min-w-[50%]">
              <Title className="">Reason to adopt</Title>
              <TextAreaBox value={ReasonToAdopt} onChange={(e)=>setReasonToAdopt(e.target.value)}></TextAreaBox>
            </div>
          </form>
        </div>
      </div>


      <div className="max-w-7xl flex justify-center mx-auto">
        <Button variant={"submit"} className="cursor-pointer" onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditPage;
