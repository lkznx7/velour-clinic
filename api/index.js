import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Velour Clinic | Clínica Estética Premium' });
});

app.get('/tratamentos', (req, res) => {
  res.render('tratamentos', { title: 'Tratamentos | Velour Clinic' });
});

app.get('/resultados', (req, res) => {
  res.render('resultados', { title: 'Resultados | Velour Clinic' });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { title: 'Sobre | Velour Clinic' });
});

app.get('/depoimentos', (req, res) => {
  res.render('depoimentos', { title: 'Depoimentos | Velour Clinic' });
});

app.get('/agendamento', (req, res) => {
  res.render('agendamento', { title: 'Agendamento | Velour Clinic' });
});

export default app;