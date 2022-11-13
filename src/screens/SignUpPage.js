import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const defaultHobbies = ["Badminton", "Football", "Running"];

const url =
  "https://chickensport.000webhostapp.com/ChickenSport/?mod=user&action=addUserAction";
const location =
  "https://chickensport.000webhostapp.com/ChickenSport/?mod=location&action=getLocationList";

const hobbyUrl =
  "https://chickensport.000webhostapp.com/ChickenSport/?mod=hobby&action=getHobbyList";

const SignUpPage = () => {
  const [cityOptions, setCityOptions] = useState([]);
  const [hobbies, setHobbies] = useState(defaultHobbies);
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSignUp = async (value) => {
    try {
      toast.success("You are now a member!");
      navigate("/");
      console.log(value);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      console.log(arrErrors[0]?.message);
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const result = await axios.get(location);
        setCityOptions(result.data);
      } catch (error) {}
    };
    fetchLocation();
  });

  useEffect(() => {
    const fetchHobby = async () => {
      try {
        const result = await axios.get(hobbyUrl);
        setHobbies(result.data);
      } catch (error) {}
    };
    fetchHobby();
  });

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="p-5 border-2 border-orange-400 rounded-md"
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">Sign Up</h2>
        <div className="flex gap-x-3">
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="fullname" className="flex items-center gap-x-2">
              Fullname
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="fullname"
              type="text"
              placeholder="Enter your name"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="email" className="flex items-center gap-x-2">
              Email
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="hobbies" className="font-semibold ">
              Your hobby
            </label>
            <select
              {...register("hobby")}
              className="p-3 mb-6 border-2 border-orange-400 rounded-md w-[300px]"
            >
              {hobbies?.map((hobby) => (
                <option key={hobby.id} value={hobby.id}>
                  {hobby.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="password" className="flex items-center gap-x-2">
              Password
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your password"
            ></Input>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="phone">Phone Number</label>
            <Input
              control={control}
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="location">Location</label>
            <select
              {...register("location")}
              className="p-3 mb-6 border-2 border-orange-400 rounded-md w-[300px]"
            >
              {cityOptions &&
                cityOptions.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <button
          className="w-full p-2 mt-10 text-white bg-orange-300 rounded-md hover:bg-orange-400
          transition
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
