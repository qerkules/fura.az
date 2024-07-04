
'use client'
import 'chart.js/auto'
import { Line } from "react-chartjs-2"

export default function Chart1() {
    const data = {
        labels: [
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
            "9 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
            "13 Jan",
            "14 Jan",
            "15 Jan",
        ],
        datasets: [
            {
                fill: true,
                label: `$ Sales Overview`,
                backgroundColor: "rgba(0, 138, 255, 0.1)",
                borderColor: "#008FFB",
                data: [0, 105, 92, 155, 138, 205, 120, 92, 155, 138, 205, 320],
                lineTension: 0,
                pointRadius: 2,
                borderWidth: 3,
            },
            // {
            //     label: "Facebook",
            //     backgroundColor: "rgba(0, 138, 255, 0.5)",
            //     borderColor: "transparent",
            //     data: lineData.youtube,
            //     lineTension: 0,
            //     // borderDash: [10, 5],
            //     borderWidth: 1,
            //     pointRadius: 0,
            // },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    drawBorder: false,
                    color: "rgba(0,0,0,0.05)"
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                }
            },
        },
    }
    return (
        <><Line data={data} height={300} options={options} id="line-chart-1" style={{ height: "300px" }} /></>
    )
}
