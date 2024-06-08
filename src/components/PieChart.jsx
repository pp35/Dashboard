import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ArrowDropDown } from '@mui/icons-material';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function PieChart() {
  const data1 = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [
      {
        label: 'Deposit Amt',
        data: [40000, 25000, 20000, 15000],
        backgroundColor: [
          'skyblue',   // Utkarsh Small Finance Bank
          'orange',    // Shriram Finance
          'green',     // Mahindra Finance
          'purple',    // Bajaj Finserv
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true, // Ensure the chart remains circular
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: 10,
        borderWidth: 0,
        borderColor: '#fff',
        borderRadius: 0,
        backgroundColor: (context) => context.dataset.backgroundColor,
        font: {
          weight: 'bold',
          size: 11,
        },
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className='border shadow-md  flex flex-col justify-center items-center md:w-[43rem] lg:w-96  p-2 rounded-lg'>
      <div className=''>
        <div className='flex  justify-between items-center'>
          <h3 className='font-bold text-lg'>Your FD Portfolio</h3>
          <button className='flex items-center bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1 shadow-sm'>
            Deposit Amt <ArrowDropDown />
          </button>
        </div>
        
        <div className='flex justify-center items-center mt-4'>
          <div className='w-full max-w-xs' style={{ marginTop: '-20px' }}> {/* Adjust margin-top */}
            <div style={{ position: 'relative', width: '100%', height: '90%' }}> {/* Increase size */}
              <Pie data={data1} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
