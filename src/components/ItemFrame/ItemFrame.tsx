import React, { useCallback, useEffect, useState } from "react";
import StockIcon from "./../../assets/inventory.svg?react";
import "./ItemFrame.css";

const assetsUrl = "https://warframe.market/static/assets/";

const ItemFrame = ({ item_id }: { item_id: string }) => {
  const [itemData, setItemData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fecthItemData = useCallback(async (item_id: string) => {
    try {
      const response = await fetch(`http://localhost:8000/items/${item_id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setItemData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    fecthItemData(item_id);
  }, [item_id]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading item data</div>;

  const item = itemData.payload.item.items_in_set[0];

  return (
    <div className="item_frame">
      <div className="item_image_frame">
        <img
          className="item_image"
          src={assetsUrl + item.en.icon}
          alt={itemData.payload.item.items_in_set[0].url_name}
        />
      </div>

      <div className="item_card">
        <h3>{item.en.item_name}</h3>
        <hr />
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {item.en.description}
        </p>
        {isHovered && <div className="popup">{item.en.description}</div>}
      </div>
    </div>
  );
};

export default React.memo(ItemFrame);
