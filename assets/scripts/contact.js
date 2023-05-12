const boton = document.querySelector("#contactSubmitId");
const modal = document.querySelector("#modalId");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");

    const name = document.querySelector("#nameId").value;
    const email = document.querySelector("#emailId").value;
    const message = document.querySelector("#messageId").value;

    modal.innerHTML = `<h2 class="modal-title">Resume</h2>
    <div class="modal-message">
        <p><span>Name:</span> ${name}</p>
        <p><span>E-mail:</span> ${email}</p>
        <p><span>Your message:</span> ${message}</p>
    </div>
    <button onclick="cerrarModal()" class="contact-but" id="modalCloseId">Close</button>`
});

function cerrarModal() {
    modal.classList.remove("active");
}
