import React, { useState , useRef} from 'react'
import { useEffect } from 'react';
import * as d3 from "d3"
function ProgressPage() {

    const initialData=[
        {
            date: "june 1",
            value: 20,
        },
        {
            date:"june 2",
            value: 22,
        },
        {
            date:"june 3",
            value: 25,
        },
        {
            date:"june 5",
            value: 25,
        },
        {
            date:"june 6",
            value: 27,
        },
        {
            date:"june 8",
            value: 30,
        },
        {
            date:"june 9",
            value: 32,
        },
        {
            date:"june 11",
            value: 32,
        },
        {
            date:"june 12",
            value: 35,
        },
    ]
    const width = 450;
    const height = 150;
    const padding = 15;
    const maxValue = 50;
    
    const [chartdata, setChartdata] = useState(initialData)
    const svgRef=useRef()
    const newData = () => chartdata.map(
        function (d) {
            d.value = Math.floor(
                Math.random() * (maxValue + 1)
            )
            return d
        }
    )
    useEffect(
        () => {
            //  function for Scales 
//xscales 
            const xScale = d3.scalePoint().domain(chartdata.map((d) => d.date))
                .range([(0 + padding), (width - padding)])
        //  yScale
            const yScale = d3.scaleLinear().domain([0, d3.max(chartdata, function (d) { return d.value })])
                .range([(height - padding), (0 + padding)])
            
             // function to draw lines
            const line = d3.line()
                .x((d) => xScale(d.date))
                .y((d) => yScale(d.value))
                .curve(d3.curveMonotoneX)
            
            // draw line
            d3.select(svgRef.current)
                .select('path')
                .attr('d', (value) => line(chartdata))
                .attr('fill', 'none')
                .attr('stroke', 'white')
            // function to draw X and Y
            const xAxis = d3.axisBottom(xScale)
            const yAxis = d3.axisLeft(yScale)
            // draw x and Y
            d3.select('#xaxis').remove()
            d3.select(svgRef.current)
                .attr('fill', 'white')
                .append('g')
                .attr('transform', `translate(0,${height - padding})`)
                .attr('id', 'xaxis')
                .call(xAxis)
                d3.select('#yaxis').remove()
                d3.select(svgRef.current)
                    .append('g')
                    .attr('transform', `translate(${padding},0)`)
                    .attr('id', 'yaxis')
                    .call(yAxis)
            
            
        }, [chartdata]
       
       
        )
  return (
    <div className="bg-gray-200 min-h-screen p-5  grid justify-items-center 
 
    content-center " >
 < svg  width="600" height="300" id = "chart" ref={svgRef} viewBox = "0 0 400 150  " 
	 className="bg-gradient-to-b from-black to-red-500  p-5 ">
   

</svg >
   <p> <button className="text-lg w-40 p-1.5 "type="button" onClick={() => setChartdata(newData())}>
   refresh data</button> </p>
          
    </div>
  )
}

export default ProgressPage
