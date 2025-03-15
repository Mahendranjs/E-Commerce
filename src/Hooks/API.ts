const useFetch = () => {
  const GetProduct = async () => {
    try {
      const response = fetch("https://fakestoreapi.com/products");
      return (await response).json();
    } catch (error) {
      console.error(error);
    }
  };

  return { GetProduct };
};

export default useFetch;
