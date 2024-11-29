// components/PieChart.tsx
'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartCom = () => {
  const data = {
    labels: ['Микрофермы', 'Средние фермы', 'Крупные фермы и агрохолдинги'],
    datasets: [
      {
        data: [89, 10, 1],
        backgroundColor: ['#4CAF50', '#FF8A80', '#80D8FF'], // Colors for the segments
        hoverBackgroundColor: ['#45A049', '#FF6F6F', '#5EC3FF'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div  className='w-full max-w-[400px] max-h-[300px]'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartCom;
