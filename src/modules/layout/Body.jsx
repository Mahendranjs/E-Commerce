import { useState } from "react";
import ProductList from "../../components/ProductList";
import ProductFetch from "../../Hooks/ProductFetch";
import { useDispatch, useSelector } from "react-redux";

const Body = ({ searchTerm }) => {
  const { data, loading } = ProductFetch();
  //   // Calculate start and end indexes
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const cartItems = useSelector((state) => state.cart.cartItems);

  const filteredData = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedData.map((product, index) => (
            <ProductList
              key={product.id}
              product={product}
              cartItems={cartItems}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Body;
