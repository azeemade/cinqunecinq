export default function Page({ params }: { params: { slug: string } }) {
  return <div>Admin Post: {params.slug}</div>;
}
