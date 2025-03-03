document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
})

function posteo() {
    const commentText = document.getElementById('comentario').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString()    

    if (commentText.trim() === "") {
        alert("El comentario no puede enviarse vacío")
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments))

    document.getElementById('comentario').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('commentspublic');
    const comments = JSON.parse(localStorage.getItem('comments'))|| [];

    commentSection.innerHTML = '<h3> Comentarios publicados:</h3>';

    comments.forEach((comment, borrar) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario")
        comentarioSection.innerHTML = `<strong>${comment.name}</strong> <p>Fecha: ${comment.timestamp}</p><p>${comment.commentText}</p><button class="boton-borrar" onclick="eliminarComentario(${borrar})">Eliminar comentario</button>`; 

        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(borrar) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(borrar, 1); // 

    localStorage.setItem('comments', JSON.stringify(comments));

    mostrarComentarios();
}
