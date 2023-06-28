import {ExecuteStatementCommandOutput} from '@aws-sdk/lib-dynamodb';
import {findAllPhotos} from './commands';
import {partiQL} from './dynamodb-client';

type Modify<T, R> = Omit<T, keyof R> & R;

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

type PhotoCommandOutput = Modify<
  ExecuteStatementCommandOutput,
  {
    Items?: PhotoEntity[];
  }
>;

export async function getPhotos() {
  return partiQL.send(findAllPhotos) as Promise<PhotoCommandOutput>;
}
