const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');

const db = require('./db/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/index'));

//404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//500 handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

const init = async() => {
  try {
    await db.syncAndSeed();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
  }
  catch(err) {
    console.error(err);
  }
}

init();
