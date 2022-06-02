import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import userData from '../data/initialData'
import 'chartjs-adapter-moment'
import axios from 'axios'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
)

export const options: ChartOptions<'line'> = {
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true,
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },

  plugins: {
    title: {
      display: true,
      text: 'Progress Chart',
      color: 'white',
    },
  },

  scales: {
    y: {
      grid: {
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: true,
        borderColor: 'white',
      },
      ticks: { color: 'white' },
    },
    x: {
      type: 'time',

      display: true,
      position: 'right' as const,
      time: {
        tooltipFormat: 'DD MM YYYY',
        unit: 'day',
        displayFormats: {
          hour: 'DD MM YYYY',
        },
      },
      grid: {
        drawOnChartArea: true,
        display: true,
        borderDash: [8, 4],
        color: 'white',
        drawTicks: true,

        borderColor: 'white',
      },
      ticks: {
        color: 'white',
      },
    },
  },
}
// const labels = userData.map((d) => d.date)
// const data = userData.map((d) => d.value)

const userId = 1
const fetcher = (url) => axios.get(url).then((res) => res.data)
const { data, error } = useSWR('/api/user/' + userId, fetcher)
console.log(data?.groupedDataFinal)
export const chartData: ChartData<'line'> = {
  labels: data?.groupedDataFinal.map((d) => d.labels),

  datasets: [
    {
      label: 'Dataset 1',
      data: data?.groupedDataFinal.map((d) => d.data),
      borderColor: 'white',
      backgroundColor: 'red',
    },
  ],
}

function ProgressChart() {
  // get data from backend
  // const { data: session, status } = useSession()

  // data will look like an array of group exercise logs, each group has labels, and data
  // sate for currentt chart

  // const [currentChartDaata, setCurrentChartdata] = useState<ChartData<"line">>(null)

  function handleChartUpdate() {
    // const apiData = listfdind()
    const newData: ChartData<'line'> = {
      labels: data?.groupedDataFinal.map((d) => d.labels), // come from api

      datasets: [
        {
          label: data?.groupedDataFinal.map((d) => d.name),
          data: data?.groupedDataFinal.map((d) => d.data), // come from api
          borderColor: 'white',
          backgroundColor: 'red',
        },
      ],
    }
    console.log(newData.labels)
    // setCurrentChartdata(newData)
  }

  // functtion getChartBackgroindColor(id){
  //     if id === 1  then retturn  "from-[#de6262] to-[#ffb88c]"
  //     else if 2 ....
  // }

  return (
    <div className="grid  min-h-screen min-w-full justify-items-center bg-gray-200 p-8 ">
      <div className="h-[500px] w-[900px] bg-gradient-to-b  from-[#de6262] to-[#ffb88c] ">
        <Line options={options} data={chartData} />
      </div>
      <div className="mt-[1rem] flex flex-row rounded-2xl border p-[0.5rem]">
        <ul className=" flex max-w-md items-center justify-center  md:flex-row ">
          <li className="m-[1rem] w-full rounded-2xl p-[1rem] text-white md:w-[13rem]">
            <a
              href="#"
              className="font-semi-bold button  bg-red-500 text-[1.5rem]"
            >
              {' '}
              Squats
            </a>
          </li>
          <li className="m-[1rem] w-full rounded-2xl p-[1rem] text-white md:w-[13rem]">
            <a
              href="#"
              className="font-semi-bold button bg-red-500 text-[1.5rem] "
            >
              {' '}
              Bench Press
            </a>
          </li>
          <li className="m-[1rem] w-full rounded-2xl p-[1rem] text-white md:w-[13rem]">
            <a href="#" className="font-semi-bold bg-green-500  text-[1.5rem]">
              {' '}
              Lunges
            </a>
          </li>
          <li className="m-[1rem] w-full rounded-2xl p-[1rem] text-white md:w-[13rem]">
            <a
              href="#"
              className="font-semi-bold bg-cyan-600 text-[1.5rem] no-underline"
            >
              {' '}
              Pull Ups{' '}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ProgressChart
