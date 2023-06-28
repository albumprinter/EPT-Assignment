import React, {FormEventHandler, useState} from 'react';
import useSWR from 'swr';
import './App.css';
import {PhotoEntity} from './Photo';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function App() {
  const defaultUrl = `${process.env.REACT_APP_PROXY}/photos`;
  const [url, setUrl] = useState(defaultUrl);
  const {data: photos, error, isLoading} = useSWR(url, fetcher);
  const [isSortedByOrderCount, setSortOrderCount] = useState(false);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load photos</h1>;

  const handleSortGallery: FormEventHandler<HTMLFormElement> = event => {
    setUrl(`${process.env.REACT_APP_PROXY}/photos?sortBy=orderCount`);
    setSortOrderCount(true);

    event.preventDefault();
  };

  return (
    <div>
      <header>
        <h1>Photo Gallery</h1>
      </header>
      <main>
        <div className="controls wide">
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
        </div>

        <ul className="grid list-none wide">
          {photos?.map((photo: PhotoEntity) => (
            <li key={photo.id}>
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/images/${photo.id}.jpg`}
                alt={photo.category}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
