const app = require('./app')
//NOTE: Server Start

const port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
  });