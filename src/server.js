import express from 'express';
import routerProducts from '../src/routes/products-router.js';
import { Server as http } from 'http'
import { Server as ioServer } from 'socket.io'
import { saveMessage , getMessage} from '../src/controllers/message-controller.js';

const app = express();
const httpserver = http(app)
 const io = new ioServer(httpserver)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', routerProducts);

io.on('connection', async (socket) => {
    console.log('Usuario conectado');
    socket.on('new-message', (msj) => {
        console.log(msj);
        saveMessage(msj);
    })

    socket.emit ('message', await getMessage());
})

const PORT = process.env.PORT || 8080;

const server = httpserver.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));

