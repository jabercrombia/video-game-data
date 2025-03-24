import { columns } from "../../components/platform/columns"
import { DataTable } from "../../components/platform/table"
import ChartBar from "../../components/platform/chart"
import Pie from "../../components/platform/pie"
interface PlatformPageParams {
  slug: string;
}

export default function PlatformPage({ params }: { params: PlatformPageParams }) {
  return <div>Slug: {params.slug}</div>;
}
