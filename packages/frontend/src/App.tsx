import React, {FormEventHandler, useState} from 'react';
import useSWR from 'swr';
import {FormAction} from './FormAction';
import {rotationClass} from './ImageEffects';
import {PhotoEntity} from './Photo';
import {
  allPhotos,
  fetcher,
  photosSortByOrderCount,
  photosTextureGlossy,
} from './urls';

function App() {
  const [url, setUrl] = useState(allPhotos);
  const {data: photos, error, isLoading} = useSWR(url, fetcher);
  const [isSortedByOrderCount, setSortOrderCount] = useState(false);
  const [isFilteredByTextureGlossy, setFilterByTextureGlossy] = useState(false);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load photos</h1>;

  const handleSortGallery: FormEventHandler<HTMLFormElement> = event => {
    setUrl(photosSortByOrderCount);
    setSortOrderCount(true);
    setFilterByTextureGlossy(false);

    event.preventDefault();
  };

  const handleFilterByTexture: FormEventHandler<HTMLFormElement> = event => {
    setUrl(photosTextureGlossy);
    setFilterByTextureGlossy(true);
    setSortOrderCount(false);

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
            <div className="cf">
              <div className="fl w-50">
                <FormAction
                  id="sortByOrderCount"
                  text="Sort by order count"
                  onSubmit={handleSortGallery}
                  disabled={isSortedByOrderCount}
                />
              </div>
              <div className="fl w-50">
                <FormAction
                  id="filterByTextureGlossy"
                  text="Filter by glossy"
                  onSubmit={handleFilterByTexture}
                  disabled={isFilteredByTextureGlossy}
                />
              </div>
            </div>
          </li>
          {photos?.map(
            ({id, category, orderCount, extra = {}}: PhotoEntity) => {
              const {texture = '_', rotate = 0} = extra;
              return (
                <li key={id} className="fl w-100 w-50-m  w-25-ns pa2-ns">
                  <div className="aspect-ratio aspect-ratio--1x1 overflow-hidden">
                    <img
                      src={`${process.env.REACT_APP_PUBLIC_URL}/images/${id}.jpg`}
                      alt={category}
                      className={rotationClass(rotate)}
                    />
                  </div>
                  <p className="ph2 ph0-ns pb3 db">
                    id: {id}, orderCount: {orderCount}, category: {category},
                    texture: {texture}, rotate: {rotate}
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
