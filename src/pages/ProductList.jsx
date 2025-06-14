import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductsContainer from "../components/ProductsContainer";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import api from "../api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const limit = 8;

  async function loadProducts(query = "", page = 1) {
    setLoading(true);
    try {
      const response = await api.get(
        `/products?q=${encodeURIComponent(query)}&_page=${page}&_limit=${limit}`
      );
      const totalCount = response.headers["x-total-count"];
      setProducts(response.data);
      setTotalPages(Math.ceil(totalCount / limit));
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts(searchQuery, currentPage);
  }, [currentPage, searchQuery]);

  function handleSearch(query) {
    setSearchQuery(query);
    setCurrentPage(1);
  }

  return (
    <div className="main-container">
      <Header title="Lista de Produtos" />
      <SearchBar loadProducts={handleSearch} />
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <>
          <ProductsContainer products={products} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}

export default ProductList;
