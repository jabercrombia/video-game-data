export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
    {params.slug}
    </>
  )
}