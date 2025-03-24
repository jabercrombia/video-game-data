import { Metadata } from "next";

interface PlatformPageParams {
  slug: string;
}

interface PlatformPageProps {
  params: PlatformPageParams;
}

export default function PlatformPage({ params }: PlatformPageProps) {
  return <div>Slug: {params.slug}</div>;
}
