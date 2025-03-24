interface PlatformPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;

  return <div>Slug: {slug}</div>;
}
