import { columns } from "./components/platform/columnshome"
import { DataTable } from "./components/platform/tablehome"
import Pie from "./components/platform/pie"
import PiePublisher from "./components/platform/piepublisher"
interface PlatformPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  

  // Fetch data from your API
  const res = await fetch(`${process.env.API_URL}/api/highest/genre`);
  
  if (!res.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const publisher = await fetch(`${process.env.API_URL}/api/highest/publisher`);
  
  if (!publisher.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  const data = await res.json();
  const datapublisher = await publisher.json();

  return (
    <div className="w-full mx-auto px-[30px]">
      <h1 className="capitalize text-xl">Top Video Game Sales</h1>
      <div className="flex w-full">
        <div className="w-1/2">
          <Pie data={data} />
        </div>
        <div className="w-1/2">
          <PiePublisher data={datapublisher} />
        </div>
        

      </div>
      
      
    </div>
  );
}
