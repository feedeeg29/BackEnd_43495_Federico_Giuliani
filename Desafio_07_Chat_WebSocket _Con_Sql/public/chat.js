const socket = io();

socket.on("connect", () => {
    //console.log("Usuario conectado");
})
const sendMsg = () => {
    const userEmail = document.getElementById("userEmail").value;
    const userMsg = document.getElementById("userMsg").value;
    let date = new Date().toLocaleString();
    socket.emit("userMsg", { userEmail, userMsg, date });
    document.getElementById("userMsg").value = "";
    return false;
};

socket.on("chat", (data) => {
    const divFiller = document.getElementById("div-chats");
    divFiller.innerHTML = "";
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


