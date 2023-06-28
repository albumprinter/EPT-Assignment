import {rest} from 'msw';

const mockPhotos = [
  {
    orderCount: {N: '350'},
    id: {S: 'image_10'},
    category: {S: 'poster'},
    extra: {M: {texture: {S: 'canvas'}}},
  },
  {
    orderCount: {N: '3000'},
    id: {S: 'image_13'},
    category: {S: 'card'},
    extra: {M: {border: {N: '5'}}},
  },
  {
    orderCount: {N: '112800'},
    id: {S: 'image_5'},
    category: {S: 'poster'},
    extra: {M: {texture: {S: 'glossy'}}},
  },
];
export const handlers = [
  rest.get(
    `${process.env.REACT_APP_PROXY}/photos`,
    (req: any, res: any, ctx: any) => {
      return res(ctx.json(mockPhotos));
    }
  ),
];
