import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  //fetch data for the product with the ID of params.productId

  return (
    <div>
      <h1>A Product Detail Page {params.productId}</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
}
