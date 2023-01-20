import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Last 30 Days',
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
};

const labels = ['2018-11-17', '2018-11-18', '2018-11-19','2018-11-20','2018-11-21','2018-11-2','2018-11-23','2018-11-24','2018-11-25','2018-11-26','2018-11-27','2018-11-28','2018-11-29','2018-11-30','2018-11-01','2018-11-02','2018-11-03','2018-11-04','2018-11-05','2018-11-06','2018-11-07','2018-11-08','2018-11-09','2018-11-10','2018-11-11','2018-11-12','2018-11-13','2018-11-14','2018-11-15','2018-11-16','2018-11-17',];

const data = {
  labels: labels, 
  datasets: [
      {
    title: 'Dataset 1',
    label: 'Dataset 1',
      data: [1.7, 1.3, 1.8,1.9,1.6,1.7,1.9,1.6,1.6,1.6,1.8,2,2.2,2,2.3,1.3, 1.5,1.9,1.5,1.8,1.4,1.6,2.0, 2.3,2.5,2.7, 3.6, 3.3,3.0,2.6,2.0,2.3,2.4],
      backgroundColor: '#D6A5FF',
    },
  ],
};

export function LineChartResponse() {
  return <Line options={options} data={data} />;
}
