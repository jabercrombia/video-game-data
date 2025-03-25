import { columns } from "./components/platform/columnshome"
import { DataTable } from "./components/platform/tablehome"
import Pie from "./components/platform/pie/pie"
import PiePublisher from "./components/platform/pie/piepublisher"
import PiePlatform from "./components/platform/pie/pieplatform"
import Yearly from "./components/platform/line/lineyearly"
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

  // Fetch data from your API
  const platform = await fetch(`${process.env.API_URL}/api/highest/platform`);
  
  if (!platform.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const allsales = await fetch(`${process.env.API_URL}/api/allsales/`);
  
  if (!allsales.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const yearly = await fetch(`${process.env.API_URL}/api/yearly`);
  
  if (!yearly.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  const data = await res.json();
  const datapublisher = await publisher.json();
  const dataplatform = await platform.json();
  const dataallsales = await allsales.json();
  const datayearly = await yearly.json();

  return (
    <div className="w-full mx-auto px-[30px] home">
      <h1 className="capitalize text-xl">Top Video Game Sales</h1>
      <div className="flex w-full">
        <div className="w-1/3">
          <Pie data={data} />
        </div>
        <div className="w-1/3">
          <PiePublisher data={datapublisher} />
        </div>
        <div className="w-1/3">
          <PiePlatform data={dataplatform} />
        </div>
      </div> 
      <div className="w-full">
        <Yearly data={datayearly} />
        <DataTable columns={columns} data={dataallsales}/>
      </div>
    </div>
  );
}
