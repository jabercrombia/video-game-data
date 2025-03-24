import { columns } from "../../components/platform/columns"
import { DataTable } from "../../components/platform/table"
import ChartBar from "../../components/platform/chart"
import Pie from "../../components/platform/pie"
interface PlatformPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  

  // Fetch data from your API
  const res = await fetch(`http://localhost:3000/api/platform/${slug}?include=name,na_sales,eu_sales,global_sales,other_sales,jp_sales,genre,publisher&query=global_sales&order=DESC`);
  
  if (!res.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const topGames = await fetch(`http://localhost:3000/api/platform/${slug}?include=name,na_sales,eu_sales,global_sales,other_sales,jp_sales&query=global_sales&order=DESC`);
  
  if (!topGames.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  const data = await res.json();

  const dataTopGames = await topGames.json();

  return (
    <div className="w-full mx-auto px-[30px]">
      <h1 className="uppercase text-3xl">{slug} Sales</h1>

     
        <DataTable columns={columns} data={data} />
        
        <div className="flex"> 
          <div className="w-3/4">
            <ChartBar data={dataTopGames}/>
          </div>
          <div className="w-1/4">
            <Pie />
          </div>
        </div>
    </div>
  );
}
