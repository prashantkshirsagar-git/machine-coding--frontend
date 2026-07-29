import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { PAGE_SIZE } from "./constants";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const totalProduct = products.length;
  const noOfPages = Math.ceil(totalProduct / PAGE_SIZE);
  const start = currentpage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentpage(n);
  };
  const goToNextPage = () => {
    setCurrentpage((prev) => prev + 1);
  };
  const goToPrevPage = () => {
    setCurrentpage((prev) => prev - 1);
  };

  return !products.length ? (
    <h1>No products found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button
          disabled={currentpage === 0}
          className="page-num"
          onClick={() => goToPrevPage()}
        >
          ◀️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`page-num ${n === currentpage ? "active" : ""}`}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n +1}
          </button>
        ))}
        <button
          disabled={currentpage === noOfPages - 1}
          className="page-num"
          onClick={() => goToNextPage()}
        >
          ▶️
        </button>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} title={p.title} image={p.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
