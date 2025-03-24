export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params?.slug;
  return <div>Slug: {slug}</div>; // ✅ No need for await
}