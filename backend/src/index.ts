import mongoose from 'mongoose';

import app from './app';

const port = 8080; // default port to listen
(async () => {
  try {
    await mongoose.connect('mongodb://db');
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  } catch (e) {
    console.log('Error initializing the server', e);
    process.exit(1);
  }
})();
