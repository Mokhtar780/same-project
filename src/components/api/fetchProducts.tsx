const fetchProducts = async (): Promise<[]> => {
    try {
      const response = await fetch("http://localhost:9000/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  
  export default fetchProducts;