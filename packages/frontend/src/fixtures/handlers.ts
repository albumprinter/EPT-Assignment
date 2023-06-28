import {rest} from 'msw';

const mockPhotos = [
  {
    orderCount: '350',
    id: 'image_10',
    category: 'poster',
    extra: {texture: 'canvas'},
  },
  {
    orderCount: '3000',
    id: 'image_13',
    category: 'card',
    extra: {border: '5'},
  },
  {
    orderCount: '112800',
    id: 'image_5',
    category: 'poster',
    extra: {texture: 'glossy'},
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
