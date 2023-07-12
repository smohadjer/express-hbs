import express from 'express';
import { engine } from 'express-handlebars';

// Start of fix for __dirname is not defined in ES module scope
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Endo fo fix

const app = express();
const port = 8000;

app.engine('hbs', engine({
  extname: 'hbs',
  //defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Saeid'
  });
});

app.get('/test.html', (req, res) => {
  res.render('home', {layout: 'test'});
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


