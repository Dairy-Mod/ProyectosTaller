let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let idTarea = document.getElementById('idTarea');
    let video = document.getElementById('video');
    let imagen = document.getElementById('imagen');
    let audio = document.getElementById('audio');
 
    let tareas = [
    {   
        nombre : "Desmond" ,
        fecha : "2012-05-26",
        descripcion : "¿Pero qué?",
        video : "/ProyectosTaller/Proyecto-8/Fallout 3 Teaser Trailer.mp4",
        imagen : "/ProyectosTaller/Proyecto-8/Hacienda.jpg",
        audio : "/ProyectosTaller/Proyecto-8/Imagine_Dragons - I Bet My Life.mp3"
    },
    {   
        nombre : "John" ,
        fecha : "2010-10-10",
        descripcion : "My name is JOHN CENA!",
        video : "/ProyectosTaller/Proyecto-8/Fallout 3 Teaser Trailer.mp4",
        imagen : "/ProyectosTaller/Proyecto-8/Hacienda.jpg",
        audio : "/ProyectosTaller/Proyecto-8/Imagine_Dragons - I Bet My Life.mp3"
    } ,
    {
        nombre : "Don Pollo" ,
        fecha : "2023-06-12",
        descripcion : "Un video más mi gente",
        video : "/ProyectosTaller/Proyecto-8/Fallout 3 Teaser Trailer.mp4",
        imagen : "/ProyectosTaller/Proyecto-8/Hacienda.jpg",
        audio : "/ProyectosTaller/Proyecto-8/Imagine_Dragons - I Bet My Life.mp3"
    }];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class="container">
            <div class='row justify-content-center my-3'>
                <div class='col-1 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-2 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-2 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-2 border p-3'>
                    ${ tarea.video ? `<video width="100%" controls><source src="${ tarea.video }" type="video/mp4"></video>` : 'Video no disponible' }
                </div>
                <div class='col-2 border p-3'>
                    ${ tarea.imagen ? `<img src="${ tarea.imagen }" style="max-width: 100%;" alt="Imagen">` : 'Imagen no disponible' }
                </div>
                <div class='col-3 border p-3'>
                    ${ tarea.audio ? `<audio controls style="width: 100%; max width: 200px;"><source src="${ tarea.audio }" type="audio/mp3"></audio>` : 'Audio no disponible' }
                </div>
                <div class='col-1 border p-1 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" style="width: 100%; max width: 200px;" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-1 text-center'>
                    <button class='btn btn-danger' style="width: 100%; max width: 200px;" onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
            </div>
            </div>
            `;
        });
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            video: video.files.length > 0 ? URL.createObjectURL(video.files[0]) : null,
            imagen: imagen.files.length > 0 ? URL.createObjectURL(imagen.files[0]) : null,
            audio: audio.files.length > 0 ? URL.createObjectURL(audio.files[0]) : null
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });