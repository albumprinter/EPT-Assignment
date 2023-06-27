import {getPhotos} from '../lib';
import {createPhotosTable} from './create-tables';
import {seedPhotos} from './seed';

(async () => {
  try {
    const createTableResponse = await createPhotosTable();
    console.log(createTableResponse);
    const seedPhotosResponse = await seedPhotos();
    console.log(seedPhotosResponse);

    console.log('done!!');
  } catch (err) {
    console.error('error setting up dynamo');
    throw new Error(err);
  } finally {
    const photos = await getPhotos();
    console.log(photos);
  }
})();
