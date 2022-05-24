let socket = io();

// PRODUCTS
fetch("/api/productos-test")
    .then(response => response.json())
    .then(data => {
        renderTable(data);
    })
    .catch(error => console.log(error));

function renderTable(data) {
    const table = document.getElementById("table-products");
    const html = data.map(element => {
        return (`<tr>
    <td>${element.name}</td>
    <td>${element.price}</td>
    <td><img src="${element.thumbnails}" style="height:100px"></td>
    </tr>`);
    }).join("");
    table.innerHTML += html;
}

// MESSAGE CENTER
const formMessage = document.getElementById("formMessage");
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    const message = {
        author: {
            id: formMessage.children.id.value,
            nombre: formMessage.children.nombre.value,
            apellido: formMessage.children.apellido.value,
            edad: formMessage.children.edad.value,
            alias: formMessage.children.alias.value,
            avatar: formMessage.children.avatar.value,
        },
        text: formMessage.children.text.value
    }
    socket.emit('new-message', message);
})

const authorsSchema = new normalizr.schema.Entity('authors');
const msjSchema = new normalizr.schema.Entity('messages', { author: authorsSchema }, { idAttribute: 'id' });
const fileSchema = [msjSchema]

const renderMessages = (msj) => {
    msj.map(element => {
        const html = ` <article>
        <span class="id">${element._doc.author.id}</span><span class="time">[${element._doc.author.timestamp}]:</span><span clas="text">${element._doc.text}</span><img src="${element._doc.author.avatar}" alt="avatar" class="avatar">
                        </article>`;
        const messageSectionVar = document.getElementById("messageSection");
        messageSectionVar.innerHTML += html;
    })
}

socket.on('message', (msj) => {
    const denormalizeMessage = normalizr.denormalize(msj.result, fileSchema, msj.entities);
    renderMessages(denormalizeMessage);
    renderCompresion(msj, denormalizeMessage);
})


const renderCompresion = (msj, denormalizeMessage) => {
    const comp = document.getElementById("compresion");
    const denormalizeMessageLwngth = (JSON.stringify(denormalizeMessage)).length;
    const msjLength = (JSON.stringify(msj)).length;
    const compresion = ((msjLength - denormalizeMessageLwngth) / msjLength * 100).toFixed(2);
    comp.innerHTML = `(Compresion: ${compresion}%)`;
}