import React from 'react';

function FDMaturityTimeline() {
  const fdData = [
    { name: 'Utkarsh FD 1', start: '2024-01', end: '2024-06' },
    { name: 'Shriram FD Plan 2', start: '2024-02', end: '2025-08' },
    { name: 'Bajaj Finserv FD 1', start: '2024-03', end: '2025-03' },
    { name: 'Mahindra FD Plan 2', start: '2024-04', end: '2026-08' },
  ];

  const yearColors = ['bg-red-100', 'bg-green-100', 'bg-blue-100'];

  return (
    <div className=" border shadow-md   rounded-md p-2 lg:h-[21rem] lg:w-[50rem]">
      <h3 className="font-bold text-lg ">FD Maturity Timeline</h3>
      <div className="">
        <div className="flex">
          {['2024', '2025', '2026'].map((year) => (
            <div key={year} className="flex-1 text-center font-semibold">
              {year}
            </div>
          ))}
        </div>
        <div className="flex shadow-md">
          {['2024', '2025', '2026'].map((year, yearIndex) => (
            <React.Fragment key={year}>
              {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => (
                <div key={index} className={` lg:w-8 sm:w-3  text-center ${yearColors[yearIndex]}`}>
                  {month}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        {fdData.map((fd, index) => {
          const startYear = parseInt(fd.start.split('-')[0]);
          const startMonth = parseInt(fd.start.split('-')[1]);
          const endYear = parseInt(fd.end.split('-')[0]);
          const endMonth = parseInt(fd.end.split('-')[1]);

          const startIndex = (startYear - 2024) * 12 + startMonth - 1;
          const endIndex = (endYear - 2024) * 12 + endMonth - 1;

          console.log(`FD: ${fd.name}, Start Index: ${startIndex}, End Index: ${endIndex}`);

          return (
            <div key={index} className="relative">
              <div
                className="relative font-medium"
                style={{
                  left: `${(startIndex / 36) * 100}%`,
                  transform: '',
                }}
              >
                {fd.name}
              </div>
              <div className="">
                <div
                  className="bg-blue-500 h-5 rounded-full relative"
                  style={{
                    left: `${(startIndex / 36) * 100}%`,
                    width: `${((endIndex - startIndex + 1) / 36) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FDMaturityTimeline;
