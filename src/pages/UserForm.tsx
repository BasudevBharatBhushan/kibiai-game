import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import kibizsystems from "../assets/images/kibizsystems.png";

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col justify-between items-center w-full h-full px-6 py-12 lg:py-14 xl:py-2 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <img
            src={kibizsystems}
            alt="KiBiz Systems"
            className="h-16 lg:h-20 object-contain"
          />
          <img
            src={titleImage}
            alt="Prompt-O-Saurus"
            className="h-24 lg:h-32 object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center flex-1 w-full mt-4 mb-6">
          <h1 className="text-2xl font-bold text-[#5e17eb] mb-6">
            User Information
          </h1>

          <form className="w-full bg-gray-100 rounded-2xl shadow-md p-6 lg:p-8 flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#5e17eb] mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#5e17eb] mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#5e17eb] mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#5e17eb] mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
                placeholder="Enter your company name"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#5e17eb] mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] resize-none"
                placeholder="Enter your address"
                rows={3}
              />
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 px-10 py-3 text-lg"
            onClick={() => navigate("/preview")}
          >
            <img src={skeletonImage} alt="" className="h-6 lg:h-7" />
            <span>SUBMIT</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 mt-2 mb-2">
          <p className="text-[#7456e1] text-sm lg:text-base font-semibold">
            POWERED BY
          </p>
          <img
            src={kibiaiLogo}
            alt="KiBi-AI"
            className="h-16 lg:h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
