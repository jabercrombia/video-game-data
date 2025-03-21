import { Payment, columns } from "../../components/platform/columns"
import { DataTable } from "../../components/platform/table"

interface PlatformPageParams {
  slug: string;
}

export default async function PlatformPage({ params }: { params: PlatformPageParams }) {
  const { slug } = params; // Extract slug from URL params

  // Fetch data from your API
  const res = await fetch(`http://localhost:3000/api/platform/${slug}`);
  
  if (!res.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  interface Game {
    id: string;
    name: string;
    year: number;
    na_sales: string;
    eu_sales: string;
  }

  interface PlatformData {
    games: Game[];
  }

  const data: PlatformData = await res.json();

  return (
    <div>
      <h1>Platform: {slug}</h1>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
  
    </div>
  );
}
