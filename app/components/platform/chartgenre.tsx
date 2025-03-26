"use client"
import { Bar, BarChart, XAxis, LabelList, CartesianGrid } from "recharts"
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
    data: { genre: string; total_sales: number }[];
  }



const chartConfig = {
  total_sales: {
    label: "Total Sales",
    color: getColorByIndex(2),
  },
} satisfies ChartConfig

export default function Chart({ data }: ChartProps) {

  
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Top Selling Genres</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="genre"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 20)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total_sales" fill={getColorByIndex(0)} radius={2}>
            <LabelList
                position="top"
                offset={1}
                className="fill-foreground"
                fontSize={10}
              />
              </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
