import { ReactNode, Suspense, use, useEffect, useState } from "react";
import { getProducts } from "../services/products/queries";

function ErrorBoundary({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return fallback || <div>အမှားတစ်ခုဖြစ်နေပါသည်</div>;
  }

  return children;
}

const ProductList = () => {
  const products = use(getProducts());
  console.log(products);
  return <div>hu</div>;
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<h1>loading...</h1>}>
        <ProductList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
