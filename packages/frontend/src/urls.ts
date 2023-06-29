// parse json response(s)
export const fetcher = (url: string) => fetch(url).then(res => res.json());

export const allPhotos = `${process.env.REACT_APP_PROXY}/photos`;

export const photosSortByOrderCount = `${process.env.REACT_APP_PROXY}/photos?sortBy=orderCount`;

export const photosTextureGlossy = `${process.env.REACT_APP_PROXY}/photos?texture=glossy`;
