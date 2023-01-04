const socket = io();

socket.on("connect", () => {
    //console.log("Usuario conectado");
})
const sendMsg = () => {
    const mensaje = {
        userEmail: document.getElementById("userEmail").value,
        userMsg: document.getElementById("userMsg").value,
        date: `${(new Date).toLocaleDateString()} - ${(new Date).toLocaleTimeString()}`,
    }
    socket.emit("userMsg", mensaje);
    document.getElementById("userMsg").value = "";
    return false;
};

socket.on("userMsg", (data) => {
    const divFiller = document.getElementById("div-chats");
    divFiller.innerHTML = "";
    console.log(data)
    data.map((message) => {
        divFiller.innerHTML += `<div class="m-3 d-flex justify-content-between">
                                <div>
                                <span style="color:blue; font-weight:bold">${message.userEmail}</span>
                                dice: <span style="color:green;font-style:italic"> ${message.userMsg} </span>
                                </div>
                                <div>
                                <span style="color:brown"> ${message.date} </span>
                                </div>
                            </div>`;
    });
});

socket.on('productos', function () { renderProducts(); });
socket.on('messages', function (data) { renderMessages(data); });