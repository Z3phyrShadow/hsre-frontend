import Checkbox from "@/components/Checkbox";
import CheckboxWithText from "@/components/CheckboxWithText";
import HairstyleImage from "@/components/HairstyleImage";
import Toggle from "@/components/Toggle";
import Image from "next/image";

export default function Home() {
  const options = [
    { value: "price.ascending", label: "Price ascending" },
    { value: "price.descending", label: "Price descending" },
  ];

  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      {/* Section 1: Home page */}
      <section
        id="home"
        className="flex items-center justify-center h-screen flex-col snap-start"
      >
        <h1 className="text-4xl font-semibold">
          Hairstyle Recommendation System
        </h1>
        <button className="bg-[#2c2c2c] mt-10 py-4 px-15 text-xl text-white rounded-md">
          Try it out!
        </button>
      </section>

      {/* Section 2: Camera page */}
      <section
        id="camera"
        className="flex items-center justify-center h-screen px-10 gap-10 snap-start"
      >
        {/* Camera Region */}
        <div className="flex-1/2 h-[500px] bg-gray-300 relative flex items-center justify-center">
          <div className="absolute z-10 flex gap-5 justify-between w-[500px]">
            <button className="bg-green-500 border border-[#767676] py-3 flex-1 rounded-md text-white">
              {" "}
              Open Camera
            </button>
            <button className="bg-green-500 border border-[#767676] py-3 flex-1 rounded-md text-white">
              {" "}
              Upload From Device
            </button>
          </div>
          <Image
            src="/image.png"
            alt="Camera Area"
            width={500}
            height={500}
            className="mx-auto"
          ></Image>
        </div>
        {/* Photo Guide */}
        <div className="flex-1/2 h-[500px]">
          <h1 className="pb-3 text-2xl">
            <b>Give us a font-facing picture!</b>
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
            <div>
              <label htmlFor="professional" className="block pb-2">
                Professional?
              </label>
              <select
                name="professional"
                id="professional"
                className="w-[240px] border-2 border-[#D9D9D9] rounded-md p-2 pr-8"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <label htmlFor="occasion" className="block pb-2">
                Special Occasion?
              </label>
              <select
                name="occasion"
                id="occasion"
                className="w-[240px] border-2 border-[#D9D9D9] rounded-md p-2 pr-8"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <button className="bg-black w-full text-white my-5 p-2 rounded-lg">
            Generate
          </button>
          {/* Title Area */}
          <div className="border border-[#D9D9D9] p-5">
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
              />

              {/* Occasion Option */}
              <CheckboxWithText
                id="filter.occasion"
                name="filter.occasion"
                label="Special Occasion"
                text="For party stuff"
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
          <div className="grid grid-cols-4 gap-4 py-8 overflow-y-auto no-scrollbar">
            {Array.from({ length: 18 }).map((_, index) => (
              <HairstyleImage
                key={index}
                imageUrl="/image.png"
                imageAlt="Camera ALt"
                imageWidth={200}
                imageHeight={200}
                label="Label"
                price="0"
              />
            ))}
          </div>
        </div>
      </section>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
