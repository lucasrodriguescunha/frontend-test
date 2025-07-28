import connect from 'connect';
import serveStatic from 'serve-static';

const app = connect();

app.use(serveStatic('public'));

console.log(' ➜   Open: http://localhost:7007');
app.listen(7007);
