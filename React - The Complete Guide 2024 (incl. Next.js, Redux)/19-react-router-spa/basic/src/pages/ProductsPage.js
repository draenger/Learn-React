import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "A Book", price: 10 },
  { id: 2, title: "A Carpet", price: 20 },
  { id: 3, title: "A Online Course", price: 30 },
];

function ProductsPage() {
  return (
    <div>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
