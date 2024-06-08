import React from 'react';
import calendarIcon from '../assets/28 Oct.png'; // Import the calendar image
import dateIcon from '../assets/30 oct.png'; // Import the specific date image

const SideCards = () => {
  const actions = [
    {
      type: "Video KYC",
      date: "28 Oct, 2023",
      bank: "Utkarsh SF Bank FD Plan 2",
      amount: "Rs. 20,000",
      tenure: "2 Years",
      interestRate: "9.10%",
      buttons: ["Complete Now", "Reschedule"]
    },
    {
      type: "Pending Payment",
      date: "30 Oct, 2023",
      bank: "Bajaj Finserv Corp FD 1",
      amount: "Rs. 25,000",
      tenure: "18 Months",
      interestRate: "8.10%",
      buttons: ["Pay Now", "Cancel Application"]
    },
    {
      type: "Upcoming FD Maturity",
      date: "30 Oct, 2023",
      bank: "Shriram Finance Corp FD 1",
      amount: "Rs. 25,000",
      tenure: "18 Months",
      interestRate: "8.10%",
      buttons: ["Renew Now", "Compare other FDs"]
    }
  ];

  const getScheduleText = (buttons) => {
    if (buttons.includes("Pay Now")) {
      return "Pay by";
    } else if (buttons.includes("Renew Now")) {
      return "Renew by";
    } else {
      return "Scheduled on";
    }
  };

  return (
    <div className="grid w-96 grid-cols-1 gap-4">
      {actions.map((action, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">{action.type}</h4>
          <div className="flex items-center text-gray-600 mb-4">
            <div className="flex flex-col items-center mr-4">
              <p className="font-bold">{getScheduleText(action.buttons)}</p>
              <img 
                src={action.date === "30 Oct, 2023" ? dateIcon : calendarIcon} 
                alt={action.date === "30 Oct, 2023" ? "30 Oct" : "Calendar"} 
                className="w-12 h-12" 
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Bank: {action.bank}</p>
              <p className="text-gray-600">Deposit Amount: {action.amount}</p>
              <p className="text-gray-600">Tenure: {action.tenure}</p>
              <p className="text-gray-600">Interest Rate: {action.interestRate}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {action.buttons.map((btnText, btnIndex) => (
              <button
                key={btnIndex}
                className={`${
                  btnText === "Complete Now" || btnText === "Pay Now" || btnText === "Renew Now"
                    ? "bg-blue-900 hover:bg-blue-700 text-white"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-100"
                } font-bold py-2 px-4 rounded w-full h-12 flex justify-center items-center`}
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideCards;
