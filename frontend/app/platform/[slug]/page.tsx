
interface PlatformPageParams {
  slug: string;
}

export default function PlatformPage({ params }: { params: PlatformPageParams }) {
  return <div>Slug: {params.slug}</div>;
}
