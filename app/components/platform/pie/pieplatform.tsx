"use client"
import React from 'react';
import { formatNumber } from "../../../utils/formatNumber"
import { getColorByIndex } from "../../../utils/colors"

// import React from "react"
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  PS2: {
    label: "PS2",
  },
  Wii: {
    label: "Wii",
  },
  X360: {
    label: "X360",
  },
  DS: {
    label: "DS",
  },
  PS3: {
    label: "PS3",
  },
} satisfies ChartConfig

interface PieProps {
  data: { genre: string; total_sales: number }[];
}


export default function Component({ data }: PieProps) {

  const totalSales = React.useMemo(() => {
    return formatNumber(data.reduce((acc, curr) => acc + curr.total_sales, 0))
  }, [])

  const updatedData = {
    data: data.map((item, index: number) => ({
      ...item,
      fill: getColorByIndex(index)
    }))
  };

  return (
    <Card className="flex flex-col shadow-none py-0 gap-0 pt-[15px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Top Platforms</CardTitle>
        <CardDescription className="text-center">In Global Sales</CardDescription>
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
              nameKey="platform"
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
              <ChartLegend
              content={<ChartLegendContent nameKey="platform" />}
              className="md:hidden -translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"/>
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
