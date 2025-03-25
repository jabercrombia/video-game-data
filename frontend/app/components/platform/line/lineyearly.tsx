"use client"
import * as React from "react"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { getColorByIndex} from "../../../utils/colors"
import { formatNumber } from "../../../utils/formatNumber"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  na_sales: {
    label: "NA Sales",
    color: "hsl(var(--chart-1))",
  },
  eu_sales: {
    label: "EU Sales",
    color: "hsl(var(--chart-2))",
  },
  jp_sales: {
    label: "JP Sales",
    color: "hsl(var(--chart-2))",
  },
  other_sales: {
    label: "Other Sales",
    color: "orange",
  },
} satisfies ChartConfig

interface LineProps {
    data: { year: string; na_sales: number; jp_sales: number; eu_sales: number; other_sales: number }[];
  }

export default function Component({ data }: LineProps) {

    const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("na_sales")
  const total = React.useMemo(
    () => ({
      na_sales: formatNumber(data.reduce((acc, curr) => acc + curr.na_sales, 0)),
      jp_sales: formatNumber(data.reduce((acc, curr) => acc + curr.jp_sales, 0)),
      eu_sales: formatNumber(data.reduce((acc, curr) => acc + curr.eu_sales, 0)),
      other_sales: formatNumber(data.reduce((acc, curr) => acc + curr.other_sales, 0)),
    }),
    []
  )


  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Sales By Region</CardTitle>
          <CardDescription>
            Showing total sales in Millions by Region
          </CardDescription>
        </div>
        <div className="flex">
          {["na_sales","eu_sales","jp_sales", "other_sales"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickCount={20}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="jp_sales"
              type="natural"
              fill={getColorByIndex(2)}
              fillOpacity={0.7}
              stroke={getColorByIndex(2)}
              stackId="a"
            />
            <Area
              dataKey="na_sales"
              type="natural"
              fill={getColorByIndex(0)}
              fillOpacity={0.7}
              stroke={getColorByIndex(0)}
              stackId="a"
            />
            <Area
              dataKey="eu_sales"
              type="natural"
              fill={getColorByIndex(1)}
              fillOpacity={0.7}
              stroke={getColorByIndex(1)}
              stackId="a"
            />
            
            <Area
              dataKey="other_sales"
              type="natural"
              fill={getColorByIndex(5)}
              fillOpacity={0.7}
              stroke={getColorByIndex(5)}
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
