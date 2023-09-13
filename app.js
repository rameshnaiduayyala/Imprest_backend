const express = require('express');
const sequelize = require('./src/config/db');
const userRoutes = require('./src/routes/UserRouter');
const imprestRoutes=require('./src/routes/imprestRouter')
 const cors = require('cors');

const port =process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());


app.use('/users', userRoutes);




app.use('/imprestdata', imprestRoutes);
// app.use('/imprest', imprestRoutes);
// app.use('/imprest_create',imprestRoutes);
// app.use('/imprest_update',imprestRoutes);
// app.use('/imprest_delete',imprestRoutes)



sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
