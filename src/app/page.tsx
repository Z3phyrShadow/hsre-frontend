"use client";
import Checkbox from "@/components/Checkbox";
import CheckboxWithText from "@/components/CheckboxWithText";
import Dropdown from "@/components/Dropdown";
import HairstyleImage from "@/components/HairstyleImage";
import InputText from "@/components/InputText";
import InputTextArea from "@/components/InputTextArea";
import LeafletMap from "@/components/LeafletMap";
import Toggle from "@/components/Toggle";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [professional, setProfessional] = useState<boolean | null>(false);
  const [occasion, setOccasion] = useState<boolean | null>(false);
  const optionsYesNo = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];

  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      {/* Section 1: Home page */}
      <section
        id="home"
        className="flex items-center justify-center h-screen flex-col gap-10 snap-start"
      >
        <h1 className="text-4xl font-semibold text-[#1E1E1E]">
          Hairstyle Recommendation System
        </h1>
        <button
          className="bg-[#2c2c2c] py-4 px-16 text-xl text-[#F5F5F5] rounded-md cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector("#camera");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Try it out!
        </button>
      </section>

      {/* Section 2: Camera page */}
      <section
        id="camera"
        className="flex items-center justify-center h-screen px-10 gap-10 snap-start"
      >
        {/* Camera Region */}
        <div className="flex-1/2 h-[500px] bg-[#E3E3E3] relative flex items-center justify-center">
          {/* Camera Options Button */}
          <div className="absolute z-10 flex gap-5 w-full">
            {!uploadedImage && (
              <button
              className="bg-[#14AE5C] border border-[#444444] py-3 flex-1 rounded-md text-[#F5F5F5]"
              onClick={() => document.getElementById("fileInput")?.click()}
              >
              Upload From Device
              </button>
            )}
            <input
  type="file"
  id="fileInput"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name); // <-- Store file name here
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }}
/>

          </div>
          <Image
            src={uploadedImage || "/image.png"}
            alt="Camera Area"
            width={500}
            height={500}
            className={`mx-auto transition-opacity duration-300 ${
              uploadedImage ? "opacity-100" : "opacity-20"
            }`}
          />
        </div>
        {/* Photo Guide */}
        <div className="flex-1/2 h-[500px] text-[#1E1E1E]">
          <h1 className="pb-3 text-2xl">
            <b>Give us a front-facing picture!</b>
          </h1>
          <ul className="list-disc list-inside space-y-0 pl-3">
            <li>Should be in a well environment.</li>
            <li>Ensure your full face is in the box.</li>
            <li>
              Ensure that you are not wearing any accessories that right hide
              your face.
            </li>
          </ul>
          {/* Profession and Special Occasion Form */}
            <div className="flex justify-between pt-5">
            <Dropdown
              id="professional"
              name="professional"
              label="Professional?"
              options={optionsYesNo}
              onChange={(value) => setProfessional(value === "yes" ? true : false)}
            />
            <Dropdown
              id="occasion"
              name="occasion"
              label="Special Occasion?"
              options={optionsYesNo}
              onChange={(value) => setOccasion(value === "yes" ? true : false)}
            />
            </div>
          <button className="bg-[#2C2C2C] w-full text-[#F5F5F5] my-5 p-2 rounded-lg cursor-pointer" onClick={() => {
            const nextSection = document.querySelector("#hairstyle");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
            Generate
          </button>
          {/* Title Area */}
          <div className="border border-[#D9D9D9] p-5 rounded-md">
            <h3 className="font-semibold mb-2">Title</h3>
            <p>
              Answer the frequently asked question in a simple senence, a
              longish paragraph, or even in a list.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Hairstyle page */}
      <section
        id="hairstyle"
        className="flex h-screen pt-5 px-10 gap-15 snap-start"
      >
        {/* Hairstyle Sidebar */}
        <div className="flex flex-col w-[260px] text-[#1E1E1E] accent-[#2C2C2C]">
          <div className="p-3 text-base border border-[#D9D9D9] rounded-md flex flex-col">
            <h3>Keywords</h3>
            {/* Keywords Options */}
            <div className="mt-3">
              {/* Professional Option */}
              <CheckboxWithText
              id="filter.professional"
              name="filter.professional"
              label="Professional"
              text="For work stuff"
              checked={professional || false}
              onChange={(e) => setProfessional(e.target.checked)}
              />

              {/* Occasion Option */}
              <CheckboxWithText
              id="filter.occasion"
              name="filter.occasion"
              label="Special Occasion"
              text="For party stuff"
              checked={occasion || false}
              onChange={(e) => setOccasion(e.target.checked)}
              />
            </div>
            {/* Price Slider */}
            <div className="mt-2 text-base">
              <div className="flex justify-between ">
                <label htmlFor="filter.range">Price</label>
                <p className="text-sm">$10-100</p>
              </div>
              <input
                type="range"
                name="filter.price"
                id="filter.price"
                min={10}
                max={100}
                className="w-full h-2 bg-[#E6E6E6] cursor-pointer accent-[#2C2C2C]"
              />
            </div>
            {/* Color Options Area */}
            <div className="mt-3">
              <p className="mb-2 text-base">Color</p>
              {/* Color Options Checkboxes */}
              <div className="flex flex-col">
                {/* Color Option None */}
                <Checkbox
                  id="filter.color.none"
                  name="filter.color.none"
                  label="None"
                />
                {/* Color Option Highlights */}
                <Checkbox
                  id="filter.color.highlights"
                  name="filter.color.highlights"
                  label="Highlights"
                />
                {/* Color Option Full */}
                <Checkbox
                  id="filter.color.full"
                  name="filter.color.full"
                  label="Full"
                />
              </div>
            </div>
            {/* Hair Size Options */}
            <div className="mt-3">
              <p className="mb-2 text-base">Size</p>
              {/* Hair Size Checkboxes */}
              <div className="flex flex-col">
                <Checkbox
                  id="filter.size.short"
                  name="filter.size.short"
                  label="Short"
                />
                <Checkbox
                  id="filter.size.medium"
                  name="filter.size.medium"
                  label="Medium"
                />
                <Checkbox
                  id="filter.size.long"
                  name="filter.size.long"
                  label="Long"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hairstyle Images Area */}
        <div className="flex flex-col w-full text-sm">
          {/* Hairstyle Filters Area */}
          <div className="flex justify-between">
            {/* Hairstyle Searchbar */}
            <div className="w-[300px] flex justify-between items-center border border-[#D9D9D9] rounded-3xl px-3 py-2 shadow-sm">
              <input
                type="text"
                name="filter.search"
                id="filter.search"
                placeholder="Search"
                className="w-full bg-transparent text-gray-800 placeholder-[#B3B3B3] outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1E1E1E] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.6z"
                />
              </svg>
            </div>
            {/* hairstyle Filter Options */}
            <div className="flex gap-1.5">
              <Toggle label="New" />
              <Toggle label="Price ascending" />
              <Toggle label="Price descending" />
              <Toggle label="Rating" />
            </div>
          </div>
          {/* Hairstyle Image Grid */}
            {uploadedImage && (
                <div className="grid grid-cols-4 gap-4 py-8 overflow-y-auto no-scrollbar">
                {(() => {
                if (!uploadedImage || !uploadedFileName) return null;

                const uploadedImageName = uploadedFileName.split(".")[0] || "default";
                const imagePaths = Array.from({ length: 10 }, (_, i) => `${uploadedImageName}/${i + 1}.jpg`);

                return imagePaths.map((imagePath, index) => {
                const imageUrl = `/images/${imagePath}`;
                const randomPrice = Math.floor(Math.random() * 10) * 10 + 10;
                return (
                  <HairstyleImage
                  key={index}
                  imageUrl={imageUrl}
                  imageAlt={`Hairstyle ${index + 1}`}
                  imageWidth={200}
                  imageHeight={200}
                  label={`Hairstyle ${index + 1}`}
                  price={`${randomPrice}`}
                  />
                );
                });
                })()}
                </div>
            )}
        </div>
      </section>

      {/* Section 4: Schedule Cut at Salons */}
      <section
        id="salon"
        className="flex flex-col h-screen pt-5 px-10 gap-15 snap-start"
      >
        {/* Section Title */}
        <div className="justify-center w-full text-4xl font-semibold mt-10 mx-6">
          <h1>Schedule a cut at our partnered Salons!</h1>
        </div>
        {/* Contact Form Area */}
        <div className="flex justify-center mx-15 h-2/3">
          {/* Contact Form */}
          <div className="p-5 flex-2/5 rounded-lg border border-[#D9D9D9]">
            <form
              action=""
              method="post"
              className="text-base text-[#1E1E1E] flex flex-col justify-between h-full"
            >
              <InputText
                id="user.name"
                name="user.name"
                placeholder=""
                label="First Name"
              />
              <InputText
                id="user.surname"
                name="user.surname"
                placeholder=""
                label="Last Name"
              />
              <InputText
                id="user.email"
                name="user.email"
                placeholder=""
                label="Email"
              />
              <InputTextArea
                id="user.message"
                name="user.message"
                placeholder=""
                label="Message"
              />
                <button
                type="submit"
                className="bg-[#2C2C2C] text-[#F5F5F5] rounded-md py-2.5 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/thankyou";
                }}
                >
                Submit
                </button>
            </form>
          </div>
          {/* Map Area */}
          <div className="flex-3/5 h-full">
            <LeafletMap />
          </div>
        </div>
      </section>
    </div>
  );
}
