"use client"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
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
    color: "orange",
  },
  na_sales: {
    label: "Mobile",
    color: "blue",
  },
  eu_sales: {
    label: "Mobile",
    color: "light-green",
  },
} satisfies ChartConfig

export default function Chart({ data }: ChartProps) {

  
  return (
    <Card>
    <CardHeader>
      <CardTitle>Highest Grossing Games</CardTitle>
      <CardDescription>in Millions</CardDescription>
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
            tickMargin={10}
            axisLine={false}   
            tick={{ fontSize: 12 }} // Allow wrapping
            tickFormatter={(value) => value.slice(0, 20)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="global_sales" fill="var(--color-global_sales)" radius={5} />
          <Bar dataKey="na_sales" fill="var(--color-na_sales)" radius={5} />
        </BarChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col items-start gap-2 text-sm">
      <div className="leading-none text-muted-foreground">
        Showing sales for the platform
      </div>
    </CardFooter>
  </Card>  )
}
