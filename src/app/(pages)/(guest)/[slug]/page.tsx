export default function Page({ params }: { params: { slug: string } }) {
  return <div>Guest Post: {params.slug}</div>;
}
