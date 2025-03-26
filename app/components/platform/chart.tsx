"use client"
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts"
import { getColorByIndex } from "../../utils/colors"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartLegend,
  ChartLegendContent,
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
  },
  na_sales: {
    label: "NA Sales",
  },
  eu_sales: {
    label: "Eu Sales",
  },
} satisfies ChartConfig

export default function Chart({ data }: ChartProps) {

  
  return (
    <Card className="w-full border-none shadow-none">
    <CardHeader className="pl-[0px]">
      <CardTitle>Highest Grossing Games</CardTitle>
      <CardDescription>in Millions by Region</CardDescription>
    </CardHeader>
    <CardContent className="pl-[0px] mt-[20px]">
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
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="global_sales" fill={getColorByIndex(1)} radius={2}>
            <LabelList
                dataKey="global_sales"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            <LabelList
              dataKey="label"
              position="insideLeft"
              offset={8}
              className="fill-[--color-label]"
              fontSize={12}
            />
          </Bar>
          <Bar dataKey="na_sales" fill={getColorByIndex(3)} radius={2}>
          <LabelList
                dataKey="na_sales"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
          </Bar>
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>  )
}
