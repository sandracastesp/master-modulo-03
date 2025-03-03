//Users
const users = [
    {name: "Sandra España", usuario: "Sandraesp", password: "246810"},
    {name: "Ivonne Castro", usuario: "IvonneCast", password: "contrasenia"},
]

function logIn() {
    const usernamePage = document.getElementById('usuario').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.usuario === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "index-dos.html";
    }else{
        error.textContent = "El usuario o contraseña no coinciden correctamente"
    }
}