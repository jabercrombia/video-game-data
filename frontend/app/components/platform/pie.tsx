"use client"

import React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "blue" },
  { browser: "safari", visitors: 200, fill: "cyan" },
  { browser: "firefox", visitors: 187, fill: "lightblue" },
  { browser: "edge", visitors: 173, fill: "skyblue" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

interface PieProps {
  data: { genre: string; total_sales: number }[];
}

const colors = 
[
  'oklch(0.872 0.01 258.338)', // gray-300
  'oklch(0.869 0.022 252.894)', // slate-300
  'oklch(0.554 0.046 257.417)', // slate-500
  'oklch(0.372 0.044 257.287)', // slate-700
  'oklch(0.279 0.041 260.031)', // slate-800
];

export default function Component({ data }: PieProps) {

  const totalSales = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.total_sales, 0)
  }, [])

  const updatedData = {
    data: data.map((item, index:number) => ({
      ...item,
      fill: colors[index]
    }))
  };

  console.log(updatedData.data);

  return (
    <Card className="flex flex-col border-none shadow-none py-0 gap-0 pt-[15px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Top Global Sales</CardTitle>
        <CardDescription className="text-center">By Top 5 Genre</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={updatedData.data}
              dataKey="total_sales"
              nameKey="genre"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
            <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
              </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">

        <div className="leading-none text-muted-foreground">
          Sales in the Millions
        </div>
      </CardFooter>
    </Card>
  )
}
