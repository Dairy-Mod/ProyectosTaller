let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripción = document.getElementById('descripcion');

let tareas = [];
let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');

let mostrarTareas = () => {
    listaTareas.innerHTML = 'Está es mi lista de tareas:\n';
    tareas.forEach((tarea, indice) =>{
        listaTareas.innerHTML += `
        <div class='row'>
            <div class = 'col-3 border p-3'>
                <strong>${tarea.nombre} </strong>
            </div> 
            <div class = 'col-3 border p-3'>
                <strong>${tarea.fecha} </strong>
            </div> 
            <div class = 'col-4 border p-3'>
                <strong>${tarea.descripción} </strong>
            </div> 
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
            </div>
        </div>
        
        `;
    });
}

mostrarTareas();

let agregarDatos = () => { //Función arrow para agregar los datos del formulario a un arreglo
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripción: descripción.value
    };
    tareas.push(datos);
    mostrarTareas();
};
   
let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let borrarTarea = (indice) => {
    tareas.splice(indice, 1);
    console.log(tareas);
    mostrarTareas();
}

formulario.addEventListener('submit', function(event){ 

    event.preventDefault(); //Evita que se recargue la página
    agregarDatos();
    cerrarModal(); 
    formulario.reset();
});

borrarTarea(1);