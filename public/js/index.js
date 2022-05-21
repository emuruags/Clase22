 import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io();

socket.on('messages', data => {
    console.log(data);
});

// Cliente
// socket.on('mi mensaje', data => {
//     //alert(data)
//     socket.emit('notificacion', 'Mensaje recibido exitosamente')
// })


//-----------------------------------------------------------------------
const inputUsername = document.getElementById('inputUsername')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')

// const formPublicarMensaje = document.getElementById('formPublicarMensaje')
// formPublicarMensaje.addEventListener('submit', e => {
//     e.preventDefault()

//     const mensaje = { Usuario: inputUsername.value, Mensaje: inputMensaje.value }
//     socket.emit('nuevoMensaje', mensaje);
//     formPublicarMensaje.reset()
//     inputMensaje.focus()
// })


function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });



// function addMessage(e) {
//     const mensaje = {
//         author: document.getElementById('username').value,
//         text: document.getElementById('texto').value
//     };
//     socket.emit('new-message', mensaje);
//     return false;
// }


const formPublicarMsj =  document.getElementById('formPublicarMsj');
formPublicarMsj.addEventListener('submit', e => {
    e.preventDefault()
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);


})

// function makeHtmlList(mensajes) {
//     return mensajes.map(mensaje => {
//         return (`
//             <div>
//                 <b style="color:blue;">${mensaje.autor}</b>
//                 [<span style="color:brown;">${mensaje.fyh}</span>] :
//                 <i style="color:green;">${mensaje.texto}</i>
//             </div>
//         `)
//     }).join(" ");
// }


// inputUsername.addEventListener('input', () => {
//     const hayEmail = inputUsername.value.length
//     const hayTexto = inputMensaje.value.length
//     inputMensaje.disabled = !hayEmail
//     btnEnviar.disabled = !hayEmail || !hayTexto
// })

// inputMensaje.addEventListener('input', () => {
//     const hayTexto = inputMensaje.value.length
//     btnEnviar.disabled = !hayTexto
// })