const express = require('express');
//const routes = require('./routes');

const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./controllers/'));

<<<<<<< HEAD
//app.use(controllers);
=======
>>>>>>> 3caa9ba851ea38f629162e2340848f078cdf273d


sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});