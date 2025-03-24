import { Metadata } from 'next'; // Ensure this is the correct library for Metadata

export async function generateMetadata({ params }: { params: Promise<{slug: string}>}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Slug: ${slug}`
  }; // Return a valid Metadata object
}