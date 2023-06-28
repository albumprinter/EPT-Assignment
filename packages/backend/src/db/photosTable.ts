import {ExecuteStatementCommandOutput} from '@aws-sdk/lib-dynamodb';
import {findAllPhotos} from './commands';
import {partiQL} from './dynamodb-client';

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

export async function getPhotos() {
  return partiQL.send(findAllPhotos) as Promise<PhotoCommandOutput>;
}
