import React, { useCallback, useEffect, useState } from "react";
import "./ItemCard.css";

const assetsUrl = "https://warframe.market/static/assets/";

const ItemCard = ({ order }: { order: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="item_frame">
      <div className="image_frame">
        <img
          className="item_image"
          src={assetsUrl + order.itemInfo.icon}
          alt={order.itemInfo.url_name}
        />
      </div>

      <div className="item_card">
        <h3>{order.itemInfo.name}</h3>
        <hr />
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {order.itemInfo.description}
        </p>
        {isHovered && <div className="popup">{order.itemInfo.description}</div>}
      </div>
    </div>
  );
};

export default React.memo(ItemCard);
