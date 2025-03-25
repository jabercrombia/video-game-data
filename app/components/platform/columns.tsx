"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


export type Platform = {
  id: string
  genre: string
  name: string
  publisher: string
}

export const columns: ColumnDef<Platform>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "publisher",
    header: "Publisher",
    size: 200,
  },
  {
    accessorKey: "na_sales",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NA Sales
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "jp_sales",
    header: "JP Sales",
  },
  {
    accessorKey: "eu_sales",
    header: "EU Sales",
  },
  {
    accessorKey: "other_sales",
    header: "Other Sales",
  },
  {
    accessorKey: "global_sales",
    header: "Global Sales",
  },
]
