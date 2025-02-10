"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import MultiSelect from "@/lib/MultiSelect";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const skillOptions = [
  {
    name: "HTML",
    value: "HTML",
  },
  {
    name: "CSS",
    value: "CSS",
  },
  {
    name: "JavaScript",
    value: "JavaScript",
  },
  {
    name: "React",
    value: "React",
  },
];

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState([]);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: any = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!number) newErrors.number = "Phone number is required";
    if (!salary) newErrors.salary = "Salary is required";
    if (!introduction) newErrors.introduction = "Introduction is required";
    if (!experience) newErrors.experience = "experience is required";
    if (!skill) newErrors.skill = "skill is required";
    if (!status) newErrors.status = "status is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const dataToSave = {
      name,
      email,
      number,
      salary,
      introduction,
      experience,
      skill,
      status,
    };

    try {
      const res = await fetch("https://job-info-server.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      });
      const data = await res.json();
      if (data) {
        toast.success("Data added successfully");
        clearData();
      }
    } catch (error) {
      toast.error("Error adding data, check Server");
    }
  };

  const clearData = () => {
    setName("");
    setEmail("");
    setNumber("");
    setSalary("");
    setIntroduction("");
    setExperience("");
    setSkill([]);
    setStatus("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Apply Info
      </div>
      <form onSubmit={handleSubmit} className="py-4 px-6">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-1.5">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1.5">{errors.email}</p>
          )}
        </div>

        <div className="flex gap-2">
          {/* Phone Number Input */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
            {errors.number && (
              <p className="text-red-500 text-xs italic mt-1.5">
                {errors.number}
              </p>
            )}
          </div>

          {/* Salary Input */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salary"
            >
              Expected Salary
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter your Expected Salary"
            />
            {errors.salary && (
              <p className="text-red-500 text-xs italic mt-1.5">
                {errors.salary}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {/* Experience Level */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="experience"
            >
              Experience Level
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select Experience Level</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>
            {errors.experience && (
              <p className="text-red-500 text-xs italic mt-1.5">
                {errors.experience}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="skills"
            >
              Skills
            </label>
            <MultiSelect
              options={skillOptions}
              // @ts-ignore
              onSetOptions={setSkill}
              placeholder="Select Skills"
            />
          </div>
        </div>
        {errors.skill && (
          <p className="text-red-500 text-xs italic mt-1.5">{errors.skill}</p>
        )}

        {/* Introduction */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="introduction"
          >
            Introduction
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="introduction"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="Write a brief introduction"
            maxLength={500}
          ></textarea>
          {errors.introduction && (
            <p className="text-red-500 text-xs italic mt-1.5">
              {errors.introduction}
            </p>
          )}
        </div>

        {/* Status */}
        <div className="mb-4 flex items-center justify-between">
          <h4 className="block text-gray-700 font-bold mb-2">
            Select Your Status
          </h4>
          <div className="flex gap-2">
            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer">
              <input
                type="radio"
                name="status"
                value="Employed"
                checked={status === "Employed"}
                onChange={() => setStatus("Employed")}
              />
              <i className="pl-2">Employed</i>
            </label>
            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer">
              <input
                type="radio"
                name="status"
                value="UnEmployed"
                checked={status === "UnEmployed"}
                onChange={() => setStatus("UnEmployed")}
              />
              <i className="pl-2">UnEmployed</i>
            </label>
          </div>
        </div>
        {errors.status && (
          <p className="text-red-500 text-xs italic mt-1.5">{errors.status}</p>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
