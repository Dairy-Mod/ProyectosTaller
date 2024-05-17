// let listaProductos = document.querySelector("#listaProductos");
 
//     function obtieneProductos() {
//         //Promise o Promesa
//         fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())
//             .then( productosObtenidos => {
//                 console.log("Productos obtenidos", productosObtenidos);
 
//                 productosObtenidos.forEach((producto,indice) => {
//                     console.log("Producto" + producto);
 
//                     listaProductos.innerHTML += `
//                         <div class="col-12 col-md-3">
//                             <div class="card">
//                                 <img src="${ producto.image }" class="imagenProducto card-img-top py-2" alt="...">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${ producto.title }</h5>
//                                     <p class="card-text">${ producto.description.slice(0,100) }</p>
//                                     <p class="text-danger">$ ${ producto.price }</p>
//                                     <a href="#" class="btn btn-primary">Comprar</a>
//                                 </div>
//                             </div>
//                         </div>
//                     `;
//                 });
//             });
//     };
 
//     obtieneProductos();


let listaProductos = document.querySelector("#listaProductos");

function obtieneProductos() {
    // Promesa
    fetch('https://randomuser.me/api/?results=8') // Modificado para obtener 8 usaurios
        .then(response => response.json())
        .then(data => {
            let productosObtenidos = data.results; // Asumiendo que data.results contiene los "productos"
            console.log("Productos obtenidos", productosObtenidos);

            productosObtenidos.forEach((producto, indice) => {
                console.log("Producto", producto);

                listaProductos.innerHTML += `
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="${ producto.picture.large }" class="imagenProducto card-img-top py-2" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${ producto.name.first } ${ producto.name.last }</h5>
                                <p class="card-text">Gender: ${ producto.gender }</p>
                                <p class="text-danger">Email: ${ producto.email }</p>
                                <a href="#" class="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error); // se usa para capturar y manejar cualquier error que ocurra durante la solicitud fetch
        });
};

obtieneProductos();

    