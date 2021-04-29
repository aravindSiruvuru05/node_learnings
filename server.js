const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})  
//NOTE: Server Start

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
  });