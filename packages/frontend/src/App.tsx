import React, {FormEventHandler, useState} from 'react';
import useSWR from 'swr';
import {PhotoEntity} from './Photo';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function App() {
  const defaultUrl = `${process.env.REACT_APP_PROXY}/photos`;
  const [url, setUrl] = useState(defaultUrl);
  const {data: photos, error, isLoading} = useSWR(url, fetcher);
  const [isSortedByOrderCount, setSortOrderCount] = useState(false);
  const [isFilteredByTextureGlossy, setFilterByTextureGlossy] = useState(false);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load photos</h1>;

  const handleSortGallery: FormEventHandler<HTMLFormElement> = event => {
    setUrl(`${process.env.REACT_APP_PROXY}/photos?sortBy=orderCount`);
    setSortOrderCount(true);

    event.preventDefault();
  };

  const handleFilterByTexture: FormEventHandler<HTMLFormElement> = event => {
    setUrl(`${process.env.REACT_APP_PROXY}/photos?texture=glossy`);
    setFilterByTextureGlossy(true);

    event.preventDefault();
  };

  return (
    <div className=' className="mw9 center ph3-ns"'>
      <header>
        <h1 className="f1 lh-title">Photo Gallery</h1>
      </header>
      <main>
        <ul className="cf ph2-ns list-none">
          <li className="fl w-100 pa2">
            <form onSubmit={handleSortGallery}>
              <label htmlFor="sortByOrderCount">
                <input
                  disabled={isSortedByOrderCount}
                  type="submit"
                  name="sortByOrderCount"
                  value="Sort by order count"
                />
              </label>
            </form>
            <form onSubmit={handleFilterByTexture}>
              <label htmlFor="filterByTextureGlossy">
                <input
                  disabled={isFilteredByTextureGlossy}
                  type="submit"
                  name="filterByTextureGlossy"
                  value="Filter by glossy"
                />
              </label>
            </form>
          </li>
          {photos?.map(
            ({id, category, orderCount, extra = {}}: PhotoEntity) => {
              const {texture = '_'} = extra;
              return (
                <li key={id} className="fl w-100 w-50-m  w-25-ns pa2-ns">
                  <div className="aspect-ratio aspect-ratio--1x1">
                    <img
                      src={`${process.env.REACT_APP_PUBLIC_URL}/images/${id}.jpg`}
                      alt={category}
                    />
                  </div>
                  <p className="ph2 ph0-ns pb3 db">
                    id: {id}, orderCount: {orderCount}, category: {category},
                    texture: {texture}
                  </p>
                </li>
              );
            }
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
