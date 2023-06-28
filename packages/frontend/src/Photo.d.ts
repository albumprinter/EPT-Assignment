export type PhotoExtraEntity = {
  rotate?: number;
  border?: number;
  texture?: string;
};

export type PhotoEntity = {
  id: string;
  orderCount: number;
  category: string;
  extra?: PhotoExtraEntity;
};
