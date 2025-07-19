import React, { useCallback, useState } from "react";

import styles from "./ItemCard.module.css";

import type { ItemOrder, ModOrder } from "@/types";

const assetsUrl = "https://warframe.market/static/assets/";

function ItemCard ({ order }: { order: ModOrder | ItemOrder }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const itemType = order.isMod ? styles.mod : styles.item

  return (
    <div className={styles.item_frame}>
      <div className={styles.image_frame}>
        <img
          className={styles.item_image}
          src={assetsUrl + order.itemInfo.icon}
          alt={order.itemInfo.urlName}
        />
      </div>

      <div className={styles.item_card + ` ${itemType}`}>
        <h3>{order.itemInfo.name}</h3>
        <hr />
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {order.itemInfo.description}
        </p>
        {isHovered && <div className={styles.popup}>{order.itemInfo.description}</div>}
      </div>
    </div>
  );
};

export default React.memo(ItemCard);
