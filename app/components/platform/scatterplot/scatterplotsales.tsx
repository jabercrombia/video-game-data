"use client"

import React, { useRef } from 'react';


import { ScatterChart, axisClasses } from '@mui/x-charts';
import { getRandomColor } from "../../../utils/colors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const chartSetting = {
  yAxis: [
    {
      label: "Sales (thousands)",
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

interface PieProps {
  data: { year: string; na_sales: number; jp_sales: number; eu_sales: number; other_sales: number }[];
}

export default function ScatterPlot({ data }: PieProps) {

  // add up the sales
  const newData = data.map((item) => ({
    year: item.year,
    sales: (item.eu_sales + item.jp_sales + item.na_sales + item.other_sales).toFixed(2),
  }));

  return (
    <>
    <Card className="flex flex-col py-0 gap-0 pt-[15px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Global Sales x Year</CardTitle>
        <CardDescription className="text-center">In Thousands</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ScatterChart
          dataset={newData}
          height={400}
          xAxis={[{ id: "year", label: "Year" }]}
          series={[
            { datasetKeys: { id: "year", x: "year", y: "sales" }, label: "Sales", color: getRandomColor() },
          ]}
          {...chartSetting}
        />
      </CardContent>
     
    </Card>
    </>
  );
}
