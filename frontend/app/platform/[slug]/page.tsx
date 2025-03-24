export default function PlatformPage({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>; // ✅ No need for await
}
