interface BaseOrder {
  id: string;
  type: "buy" | "sell";
  isMod?: boolean;
  isVisible: boolean;
}

export interface ModOrder extends BaseOrder {
  modRank: number;
  itemInfo: ModItemInfo;
}

export interface ItemOrder extends BaseOrder {
  itemInfo: RegularItemInfo;
}

interface BaseItemInfo {
  name: string;
  icon: string;
  thumb: string;
  urlName: string;
  description: string;
}

interface ModItemInfo extends BaseItemInfo {
  maxRank?: number;
}

interface RegularItemInfo extends BaseItemInfo {}
