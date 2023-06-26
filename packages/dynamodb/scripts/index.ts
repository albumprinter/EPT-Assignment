import { createPhotosTable } from './create-tables';
import { seedPhotos } from './seed';

(async () => {
  try {
    await createPhotosTable();
    await seedPhotos();

    console.log('done!!');
  } catch (err) {
    console.log('error setting up dynamo', err);
    process.exit();
  }
})();
