import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Prodcuts List {id}</h1>
    </div>
  );
}
