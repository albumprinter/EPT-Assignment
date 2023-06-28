import React from 'react';
import useSWR from 'swr';
import './App.css';
import {PhotoEntity} from './Photo';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function App() {
  const {
    data: photos,
    error,
    isLoading,
  } = useSWR(`${process.env.REACT_APP_PROXY}/photos`, fetcher);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load photos</h1>;

  return (
    <div>
      <header>
        <h1>Photo Gallery</h1>
      </header>
      <main>
        <ul className="grid list-none">
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
