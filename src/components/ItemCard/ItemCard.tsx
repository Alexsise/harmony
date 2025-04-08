import React, { useCallback, useEffect, useState } from "react";
import { ItemOrder, ModOrder } from "../../types";
import "./ItemCard.css";

const assetsUrl = "https://warframe.market/static/assets/";

const ItemCard = ({ order }: { order: ModOrder | ItemOrder }) => {
  console.log(order.isMod);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="item_frame">
      <div className="image_frame">
        <img
          className="item_image"
          src={assetsUrl + order.itemInfo.icon}
          alt={order.itemInfo.urlName}
        />
      </div>

      <div className="item_card" id={order.isMod ? "mod" : "item"}>
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
