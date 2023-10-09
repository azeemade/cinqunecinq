export default function Page({ params }: { params: { slug: string } }) {
  return <div>Admin Edit Post: {params.slug}</div>;
}
