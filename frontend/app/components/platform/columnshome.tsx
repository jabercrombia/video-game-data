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
  },
  {
    accessorKey: "sales.na_sales",
    header: "NA Sales",
  },
  {
    accessorKey: "sales.eu_sales",
    header: "EU Sales",
  },
  {
    accessorKey: "sales.jp_sales",
    header: "JP Sales",
  },
  {
    accessorKey: "sales.other_sales",
    header: "Other Sales",
  },
  {
    accessorKey: "sales.global_sales",
    header: "Global Sales",
  },
]
