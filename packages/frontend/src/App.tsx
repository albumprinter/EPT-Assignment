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
    <div className="App">
      <header className="App-header">
        {photos?.map((photo: PhotoEntity) => (
          <img
            key={photo.id}
            src={`/images/${photo.id}`}
            alt={photo.category}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
