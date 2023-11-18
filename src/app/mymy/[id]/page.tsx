export default function Mymy({ params }: { params: { id: string } }) {
  const { id } = params;

  return <div>Mymy {id}</div>;
}
