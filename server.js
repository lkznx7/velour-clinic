import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});