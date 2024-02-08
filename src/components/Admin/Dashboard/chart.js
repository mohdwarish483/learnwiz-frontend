// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend,
// } from 'chart.js';
// import { Line, Doughnut } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend
// );

// export const LineChart = ({ views = [] }) => {
//   const labels = getLastYearMonths();

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'Yearly Views',
//       },
//     },
//   };

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Views',
//         data: views,
//         borderColor: 'rgba(107,70,193,0.5)',
//         backgroundColor: '#6b46c1',
//       },
//     ],
//   };

//   return <Line options={options} data={data} />;
// };

// export const DoughnutChart = ({ users = [] }) => {
//   const data = {
//     labels: ['Subscribed', 'Not Subscribed'],
//     datasets: [
//       {
//         label: 'Views',
//         data: users,
//         borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
//         backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return <Doughnut data={data} />;
// };

// function getLastYearMonths() {
//   const labels = [];

//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const currentMonth = new Date().getMonth();

//   const remain = 11 - currentMonth;

//   for (let i = currentMonth; i < months.length; i--) {
//     const element = months[i];
//     labels.unshift(element);
//     if (i === 0) break;
//   }

//   for (let i = 11; i > remain; i--) {
//     if (i === currentMonth) break;
//     const element = months[i];
//     labels.unshift(element);
//   }

//   return labels;
// }

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Title,
//   PointElement,
// } from 'chart.js';

// import { Line, Doughnut } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Title,
//   PointElement
// );

// export const DoughnutChart = () => {
//   const data = {
//     labels: ['Subscribed', 'Not Subscribed'],
//     datasets: [
//       {
//         label: 'Views',
//         data: [3, 20],
//         borderColor: ['rgba(62,12,171,1)', 'rgba(214,43,129,1)'],
//         backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <>
//       {!data || data.datasets.length === 0 ? (
//         <div>No Data available</div>
//       ) : (
//         <Doughnut data={data} />
//       )}
//     </>
//   );
// };

// export const LineChart = () => {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'Yearly Views',
//       },
//     },
//   };

//   const data = {
//     labels: getLastYearMonths(),
//     datasets: [
//       {
//         label: 'Views',
//         data: [1, 2, 3, 4, 5],
//         borderColor: 'rgba(107,70,193,0.5)',
//         backgroundColor: '#6b4c1',
//       },
//     ],
//   };
//   return <Line options={options} data={data} />;
// };

// function getLastYearMonths() {
//   const labels = [];
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const currentMonth = new Date().getMonth();
//   const element = months[currentMonth];
//   console.log(element);
//   for (let i = currentMonth; i <= 0; i--) {
//     labels.unshift(months[i]);
//   }
//   console.log(labels);
//   for (let index = 11; index > currentMonth; index--) {
//     labels.unshift(months[index]);
//   }
//   console.log(labels);
//   return labels;
// }











