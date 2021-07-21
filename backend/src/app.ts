import express from 'express';
import helmet from 'helmet';

const app = express();

// define a route handler for the default home page
app.use(helmet());
app.get('/', (req, res) => {
  res.send('Hello world!');
});

export default app;
