"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { getRandomColor } from "@/app/utils/colors"
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

const chartConfig = {
  total_sales: {
    label: "Total Sales",
  }
} satisfies ChartConfig

interface RaderProps {
  data: { platform: string; total_sales: number }[];
}

export default function Component({ data }: RaderProps) {
  return (
    <Card className="h-[460px]">
      <CardHeader className="items-center pb-4">
        <CardTitle>Total Sales x Platform</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={data}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid className={`${getRandomColor()} opacity-100`} />
            <PolarAngleAxis dataKey="platform" />
            <Radar
              dataKey="total_sales"
              fill={getRandomColor()}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent> 
    </Card>
  )
}
