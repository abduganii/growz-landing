"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: ['2024', '2025', '2026', '2027', '2028', '2029','2030','2031'],
  datasets: [
    {
      // label: 'GeeksforGeeks Bar Chart',
      data: [300, 320, 340, 350, 360,370, 400,390],
      backgroundColor: ['#53B606'],
      borderColor: ['#53B606'],
      borderWidth: 1,
    },
  ],
};
const BarChartCom = () => {
  return (
    <div className='w-full  py-[24px] relative'  >
      <div className='w-full h-[30px] bg-white absolute top-[20px] left-0'></div>
      <Bar data={data}  />
    </div>
  );
};
export default BarChartCom;