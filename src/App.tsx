import { useSelector } from "react-redux";
import { useProducts } from "./redux/sliceProducts";

export const App = () => {
  const products = useSelector(useProducts);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
