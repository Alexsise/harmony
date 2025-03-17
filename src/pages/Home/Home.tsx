import ItemCard from "../../components/ItemCard/ItemCard";
import { ItemOrder, ModOrder } from "../../types";
import { useEffect, useState } from "react";

function Home() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState<Array<ModOrder | ItemOrder>>([]);

  const fetchProfileOrders = async (name: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/orders?` +
          new URLSearchParams({
            username: name,
          })
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setOrderData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileOrders(".Cablya");
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading order data</div>;

  return (
    <>
      {orderData.map((order: ModOrder | ItemOrder) => (
        <ItemCard order={order} key={order.id} />
      ))}
    </>
  );
}

export default Home;
