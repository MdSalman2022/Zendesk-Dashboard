import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
   responsive: true,
   maintainAspectRatio: true,
   aspectRatio: 2,
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth:0,
    },
  },
 
  plugins: {
    legend: {
      position: 'right' as const,
    }, 
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#000',
                font: {
                    size: 14,
                },
            },
        },
        y: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#000',
                font: {
                    size: 14,
                },
            },
        },
    },
    title: {
                display: true,
                text: 'Custom Chart Title'
            }

};

const labels = ['Tanner Hodge', 'Lynda Shames', 'Luke Burke', 'Kal Gaines', 'Kenzie Fields', 'Sophie Mortimer', 'Leanne Coy', 'Kayla Park', 'Sarah Matthews', 'James Murdock'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [117, 65, 59, 56, 54, 51, 40, 32, 29, 23],
      backgroundColor: '#76A700',
    },
    
  ],
};
export function HorizontalBarChart() {
   return (
    <div className="relative max-h-screen-2xl w-screen lg:w-full">
        <Bar options={options} data={data} />;
      </div>
  )
}
