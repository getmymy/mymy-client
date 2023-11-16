export default function Razzle({ params }: { params: { id: string } }) {
  const { id } = params;

  return <div>Razzle {id}</div>;
}
