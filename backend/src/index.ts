import app from './app';
import { initializeDB } from './services/db';

const port = 8080; // default port to listen
(async () => {
  try {
    await initializeDB();
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (e) {
    console.log('Error initializing the server', e);
    process.exit(1);
  }
})();
