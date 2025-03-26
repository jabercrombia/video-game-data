import { columns } from "../../components/platform/columns"
import { DataTable } from "../../components/platform/table"
import ChartBar from "../../components/platform/chart"
import ChartBarGenre from "../../components/platform/chartgenre"
import Image from "next/image";

const imageMap = {
  'nintendo': () => import('../../../public/icons/nintendo.svg'),
  'xbox': () => import('../../../public/icons/xbox.svg'),
  'playstation': () => import('../../../public/icons/playstation.svg'),
};
interface PlatformPageProps {
  params: Promise<{ slug: string }>;
}

async function getImage(slug: string) {
  try {
    if (slug in imageMap) {
      const imageModule = await imageMap[slug as keyof typeof imageMap]();
      return imageModule.default;
    } else {
      throw new Error(`Invalid slug: ${slug}`);
    }
  } catch (error) {
    console.error("Error loading image:", error);
    return null;
  }
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  const imageSrc = await getImage(slug);
  // Fetch data from your API
  const res = await fetch(`${process.env.API_URL}/api/platform/${slug}?include=name,na_sales,eu_sales,global_sales,other_sales,jp_sales,genre,publisher&query=global_sales&order=DESC`);
  
  if (!res.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const topGames = await fetch(`${process.env.API_URL}/api/platform/${slug}?include=name,na_sales,eu_sales,global_sales,other_sales,jp_sales&query=global_sales&order=DESC&limit=5`);
  
  if (!topGames.ok) {
    return <h1>Error: Failed to fetch data</h1>;
  }

  // Fetch data from your API
  const topSellingGenre = await fetch(`${process.env.API_URL}/api/top-genre/${slug}`);
  
  if (!topSellingGenre.ok) {
    return <h1>Error: Fa
      iled to fetch data</h1>;
  }

  const data = await res.json();
  const dataTopGames = await topGames.json();
  const dataTopGenre = await topSellingGenre.json();

  return (
    <div className="w-full mx-auto px-[30px]">
      <div className="flex items-center">
        <div>
          <Image src={imageSrc} alt={`${slug} icon`} width={20} height={20} className="inline" />
        </div>
        <div>
          <h1 className="inline uppercase text-3xl">{slug} Sales </h1>
        </div>
      </div>
      <div className="flex gap-4"> 
        <div className="w-1/2">
          <ChartBar data={dataTopGames}/>
        </div>
        <div className="w-1/2">
          <ChartBarGenre data={dataTopGenre} />
        </div>
      </div>
      <div className="w-full">
        <hr className="mt-[20px]"/>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
