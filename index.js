import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 8000;

app.engine('hbs', engine({
  extname: 'hbs'
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


