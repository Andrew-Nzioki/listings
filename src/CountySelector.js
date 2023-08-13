import React, { useState } from "react";
import { getCounties, getCountySubcounties } from "./data";

const CountySelector = () => {
  const counties = getCounties();
  const [selectedCounty, setSelectedCounty] = useState("");
  const subcounties = getCountySubcounties(selectedCounty);
  const [selectedSubcounty, setSelectedSubcounty] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("");

  const handleCountyChange = (event) => {
    const countyValue = event.target.value;
    setSelectedCounty(countyValue);
    setSelectedSubcounty(""); // Reset subcounty when county changes
  };

  const handleSubcountyChange = (event) => {
    setSelectedSubcounty(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleBedroomChange = (event) => {
    setSelectedBedrooms(event.target.value);
  };

  const handleSubmit = () => {
    // Use the selectedCounty, selectedSubcounty, minPrice, maxPrice, and selectedBedrooms for your data submission or processing
    console.log("Selected County:", selectedCounty);
    console.log("Selected Subcounty:", selectedSubcounty);
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
    console.log("Selected Bedrooms:", selectedBedrooms);
    // Perform your data submission or processing logic here
  };

  return (
    <div className="p-2">
      <div className="flex gap-2 text-slate-500">
        <span className="text-blue-400 font-bold">Filter</span>
        <div className="">
          <label htmlFor="countySelect" className="text-sm font-semibold mb-1">
            County:
          </label>
          <select
            id="countySelect"
            value={selectedCounty}
            onChange={handleCountyChange}
            className=" border rounded px-2 py-1 text-sm"
          >
            <option value="">Select</option>
            {counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        {selectedCounty && (
          <div className="">
            <label
              htmlFor="subcountySelect"
              className="text-sm font-semibold mb-1"
            >
              Subcounty:
            </label>
            <select
              id="subcountySelect"
              value={selectedSubcounty}
              onChange={handleSubcountyChange}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">Select</option>
              {subcounties.map((subcounty) => (
                <option key={subcounty} value={subcounty}>
                  {subcounty}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="">
          <label htmlFor="minPrice" className="text-sm font-semibold mb-1">
            Min Price:
          </label>
          <select
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
            className=" border rounded px-2 py-1 text-sm"
          >
            <option value="">Select</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="">
          <label htmlFor="maxPrice" className=" text-sm font-semibold mb-1">
            Max Price:
          </label>
          <select
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className=" border rounded px-2 py-1 text-sm"
          >
            <option value="">Select</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="">
          <label htmlFor="bedrooms" className=" text-sm font-semibold mb-1">
            Bedrooms:
          </label>
          <select
            id="bedrooms"
            value={selectedBedrooms}
            onChange={handleBedroomChange}
            className=" border rounded px-2 py-1 text-sm"
          >
            <option value="">Select</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
          </select>
        </div>

        {(selectedSubcounty || (minPrice && maxPrice) || selectedBedrooms) && (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
};

export default CountySelector;
