import {Static, Type} from '@sinclair/typebox';

type Modify<T, R> = Omit<T, keyof R> & R;

type AttributeValueString = {S: string};
type AttributeValueNumber = {N: number};
type AttributeValueMap<T> = {M: T};

export type PhotoExtraEntity = {
  rotate?: AttributeValueNumber;
  border?: AttributeValueNumber;
  texture?: AttributeValueString;
};

export type PhotoEntity = {
  id: AttributeValueString;
  orderCount: AttributeValueNumber;
  category: AttributeValueString;
  extra?: AttributeValueMap<PhotoExtraEntity>;
};

export type PhotoCommandOutput = Modify<
  ExecuteStatementCommandOutput,
  {
    Items?: PhotoEntity[];
  }
>;

export const PhotosReply = Type.Array(
  Type.Object({
    id: Type.String(),
    category: Type.String(),
    orderCount: Type.Number(),
    extra: Type.Optional(
      Type.Partial(
        Type.Object({
          texture: Type.String(),
          border: Type.Number(),
          rotate: Type.Number(),
        })
      )
    ),
  })
);

export type PhotosReplyType = Static<typeof PhotosReply>;
