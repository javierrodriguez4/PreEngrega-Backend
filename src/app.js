import express from 'express';
import handlebars from 'express-handlebars'
import productsRouter from './routes/products.router.js';
import realtimeproductsRouter from './routes/realTimeProducts.router.js'
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js'
import mongoose from 'mongoose';


const app = express();
const port = 8080;


app.engine('handlebars', handlebars.engine());
app.set ('views', './src/views');
app.set('view engine', 'handlebars')

app.use(express.static('./src/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/realtimeproducts', realtimeproductsRouter);
app.use('/api/carts', cartsRouter);
app.use('/views', viewsRouter);


mongoose.set('strictQuery', false)

try {
  await mongoose.connect('mongodb+srv://coder:coder@cluster0.78pccqa.mongodb.net/ecommerce')
  } catch (error) {
    console.log("no se pudo conectar con la base de datos");
  }

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});