function post() {
    const comentarioTexto = document.getElementById('comentario').value;
    const fecha = new Date().toLocaleString()    

    if (comentarioTexto.trim() === "") {
        alert("El comentario no puede enviarse vacío")
        return;
    }

document.getElementById('comentario').value = "";

const commentSection = document.createElement("section");
commentSection.classList.add("comentario");
commentSection.innerHTML = `<strong>Usuario</strong> <p>Fecha: ${fecha}</p><p>${comentarioTexto}</p><button class="boton-borrar" onclick="eliminarComentario(this)">Eliminar comentario</button>`;

document.getElementById('commentspublic').appendChild(commentSection);
}

function eliminarComentario(boton) {
boton.parentElement.remove(); 
}
