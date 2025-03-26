"use client"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { getColorByIndex } from "../../utils/colors"

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

interface ChartProps {
    data: { name: string; globalSales: number }[];
  }



const chartConfig = {
  global_sales: {
    label: "Global Sales",
    color: getColorByIndex(0),
  },
  na_sales: {
    label: "NA Sales",
    color: getColorByIndex(1),
  },
  eu_sales: {
    label: "Eu Sales",
    color: getColorByIndex(2),
  },
} satisfies ChartConfig

export default function Chart({ data }: ChartProps) {

  
  return (
    <Card className="border-none shadow-none w-full">
    <CardHeader>
      <CardTitle>Highest Grossing Games</CardTitle>
      <CardDescription>in Millions by Region</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={data}
          layout="vertical"

        >
          <XAxis type="number" dataKey="global_sales" label="Sales" height={100}  />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            tickMargin={5}
            axisLine={false}   
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 20)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="global_sales" fill={getColorByIndex(3)} radius={5} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>  )
}
