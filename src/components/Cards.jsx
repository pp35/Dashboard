import React from 'react';

// Import logo images
import utkarshLogo from '../assets/utkarsh.png';
import bajajLogo from '../assets/bajaj.png';
import shriramLogo from '../assets/shriram.png';
import mahindraLogo from '../assets/mahindra.png';

const Cards = () => {
  // Define a mapping of bank names to logo images
  const bankLogos = {
    "Utkarsh Small Finance Bank": utkarshLogo,
    "Bajaj Finserv": bajajLogo,
    "Shriram Finance": shriramLogo,
    "Mahindra Finance": mahindraLogo
  };

  const options = [
    {
      bank: "Utkarsh Small Finance Bank",
      leftDetails: "Highest Interest Rate",
      rightDetails: "RBI Insured",
      interestRate: "9.10% p.a.",
      btnText: "Book Now",
      bgColor: "bg-violet-200",
      btnColor: "bg-violet-500",
      bgColorleftDetails: "bg-violet-300",
      bgColorrightDetails: "bg-violet-300",
      hover:"bg-violet-800"
    },
    {
      bank: "Bajaj Finserv",
      leftDetails: "Crisil AAA Rated",
      rightDetails: "No Video KYC required",
      interestRate: "8.80% p.a.",
      btnText: "Book Now",
      bgColor: "bg-blue-100",
      btnColor: "bg-blue-500",
      bgColorleftDetails: "bg-blue-300",
      bgColorrightDetails: "bg-blue-300",
      hover: "bg-blue-600"
    },
    {
      bank: "Shriram Finance",
      leftDetails: "Crisil AAA Rated",
      rightDetails: "No Video KYC required",
      interestRate: "8.80% p.a.",
      btnText: "Book Now",
      bgColor: "",
      btnColor: "bg-black",
      bgColorleftDetails: "",
      bgColorrightDetails: "",
      hover:"bg-black"
    },
    {
      bank: "Mahindra Finance",
      leftDetails: "Crisil AAA Rated",
      rightDetails: "No Video KYC required",
      interestRate: "8.80% p.a.",
      btnText: "Book Now",
      bgColor: "bg-red-100",
      btnColor: "bg-red-500",
      bgColorleftDetails: "bg-red-300",
      bgColorrightDetails: "bg-red-300",
      hover:"bg-red-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {options.map((option, index) => (
        <div key={index} className={`lg:col-span-1 ${option.bgColor}`}>
          <div className="border p-4 rounded-lg shadow-md">
            {/* Flex container for logo and bank name */}
            <div className="flex items-center mb-2">
              <img src={bankLogos[option.bank]} alt={option.bank} className="w-11 h-11 mr-4" /> {/* Added mr-4 for spacing between image and text */}
              <h3 className="text-xl font-semibold">{option.bank}</h3>
            </div>

            <div className="flex gap-8 mb-2">
              <p className={`text-gray-600 border rounded-md shadow-md ${option.bgColorleftDetails}`}>{option.leftDetails}</p>
              <p className={`text-gray-600 border rounded-md shadow-md ${option.bgColorrightDetails}`}>{option.rightDetails}</p>
            </div>
            <p className="text-gray-700">Interest Rate: {option.interestRate}</p>
            <button className={`text-white font-bold py-2 px-4 rounded mt-2 ${option.btnColor} hover:${option.hover}`}>
              {option.btnText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
