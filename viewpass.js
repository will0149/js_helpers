//Inserta un elemento de tipo eye que hace sirve para visualizar el password
document.querySelectorAll('[type="password"]').forEach((input) => {
    const name = input.getAttribute('name');
    if (!Boolean(document.getElementById(`${name}_validateNonBlank`))) {
        input.insertAdjacentHTML('afterend', `<span id="${name}_validateNonBlank" toggle="${name}" class="fa fa-fw fa-eye field-icon toggle-password" style="float: right;margin-left: -25px;margin-top: -25px;position: relative;z-index: 2; margin-right: 5px; display: none;"></span>`);
    }
    document.getElementById(`${name}_validateNonBlank`).onclick = function () {
        const tag = document.querySelector(`[name="${this.getAttribute("toggle")}"]`);
        tag.type = tag.type === 'text' ? "password" : 'text';
        this.classList.toggle("fa-eye-slash");
    };
    input.oninput = function () {

        const icon = document.getElementById(`${name}_validateNonBlank`);
        if (Boolean(icon)) {
            icon.style.display = this.value.length > 0 && icon.style.display === "none" ? "block" : "none";
        }
    }
});