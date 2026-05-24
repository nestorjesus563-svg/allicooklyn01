const API = "https://allicooklyn.onrender.com";
// =====================================
// VARIABLES
// =====================================

let empleadoEditando = null;
let proveedorEditando = null;
let clienteEditando = null;
let pedidoEditando = null;

// =====================================
// CLIENTES
// =====================================

async function cargarClientes(){

const respuesta = await fetch(`${API}/clientes`);
    const clientes = await respuesta.json();

    let tabla = `

    <table border="1" cellpadding="10">

        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Eliminar</th>
            <th>Editar</th>
        </tr>

    `;

    for(let i = 0; i < clientes.length; i++){

        tabla += `

        <tr>

            <td>${clientes[i].id}</td>
            <td>${clientes[i].nombre}</td>
            <td>${clientes[i].edad}</td>
            <td>${clientes[i].telefono}</td>
            <td>${clientes[i].direccion}</td>

            <td>

                <button onclick="eliminarCliente(${clientes[i].id})">

                    ELIMINAR

                </button>

            </td>

            <td>

                <button onclick="editarCliente(

                    ${clientes[i].id},
                    '${clientes[i].nombre}',
                    '${clientes[i].edad}',
                    '${clientes[i].telefono}',
                    '${clientes[i].direccion}'

                )">

                    EDITAR

                </button>

            </td>

        </tr>

        `;
    }

    tabla += `</table>`;

    document.getElementById("tablaClientes").innerHTML = tabla;
}

cargarClientes();


async function eliminarCliente(id){

    if(confirm("¿Eliminar cliente?")){

        await fetch(`${API}/clientes/${id}`, {
    method: "DELETE"
});

        cargarClientes();
    }
}


function editarCliente(id, nombre, edad, telefono, direccion){

    clienteEditando = id;

    const nuevoNombre = prompt("Nuevo nombre:", nombre);

    const nuevaEdad = prompt("Nueva edad:", edad);

    const nuevoTelefono = prompt("Nuevo telefono:", telefono);

    const nuevaDireccion = prompt("Nueva direccion:", direccion);



fetch(`${API}/clientes/${id}`, {
        method: "PUT",

        headers: {

            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            nombre: nuevoNombre,

            edad: nuevaEdad,

            telefono: nuevoTelefono,

            direccion: nuevaDireccion
        })
    })

    .then(respuesta => respuesta.text())

    .then(resultado => {

        alert(resultado);

        cargarClientes();
    });
}



// =====================================
// PEDIDOS
// =====================================

async function cargarPedidos(){

const respuesta = await fetch(`${API}/pedidos`);
    const pedidos = await respuesta.json();

    let tabla = `

    <table border="1" cellpadding="10">

        <tr>

            <th>ID</th>
            <th>Cliente</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Fecha</th>
            <th>Eliminar</th>
            <th>Editar</th>

        </tr>

    `;

    for(let i = 0; i < pedidos.length; i++){

        tabla += `

        <tr>

            <td>${pedidos[i].id}</td>
            <td>${pedidos[i].cliente}</td>
            <td>${pedidos[i].productos}</td>
            <td>$${pedidos[i].total}</td>
            <td>${pedidos[i].fecha}</td>

            <td>

                <button onclick="eliminarPedido(${pedidos[i].id})">

                    ELIMINAR

                </button>

            </td>

            <td>

<button onclick="editarPedido(

    ${pedidos[i].id},

    '${pedidos[i].cliente}',

    '${pedidos[i].productos}',

    '${pedidos[i].total}'

)">
                    EDITAR

                </button>

            </td>

        </tr>

        `;
    }

    tabla += `</table>`;

    document.getElementById("tablaPedidos").innerHTML = tabla;
}

cargarPedidos();


async function eliminarPedido(id){

    if(confirm("¿Eliminar pedido?")){

await fetch(`${API}/pedidos/${id}`, {
            method: "DELETE"
        });

        cargarPedidos();
    }
}


function editarPedido(id, cliente, productos, total){

    pedidoEditando = id;

    const nuevoCliente = prompt(

        "Nuevo cliente:",

        cliente
    );

    const nuevosProductos = prompt(

        "Nuevos productos:",

        productos
    );

    const nuevoTotal = prompt(

        "Nuevo total:",

        total
    );



fetch(`${API}/pedidos/${id}`, {
        method: "PUT",

        headers: {

            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            cliente: nuevoCliente,

            productos: nuevosProductos,

            total: nuevoTotal
        })
    })

    .then(respuesta => respuesta.text())

    .then(resultado => {

        alert(resultado);

        cargarPedidos();
    });
}



// =====================================
// EMPLEADOS
// =====================================

async function guardarEmpleado(){

    const datos = {

        nombre: document.getElementById("nombreEmpleado").value,

        telefono: document.getElementById("telefonoEmpleado").value,

        puesto: document.getElementById("puestoEmpleado").value,

        salario: document.getElementById("salarioEmpleado").value
    };



    // EDITAR

    if(empleadoEditando != null){

await fetch(`${API}/empleados/${empleadoEditando}`, {
                method: "PUT",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(datos)
            }
        );

        empleadoEditando = null;

        alert("Empleado modificado");
    }



    // GUARDAR NUEVO

    else{

await fetch(`${API}/empleados`, {
            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify(datos)
        });

        alert("Empleado guardado");
    }



    document.getElementById("nombreEmpleado").value = "";
    document.getElementById("telefonoEmpleado").value = "";
    document.getElementById("puestoEmpleado").value = "";
    document.getElementById("salarioEmpleado").value = "";

    cargarEmpleados();
}



async function cargarEmpleados(){

const respuesta = await fetch(`${API}/empleados`);
    const empleados = await respuesta.json();

    let tabla = `

    <table border="1" cellpadding="10">

        <tr>

            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Puesto</th>
            <th>Salario</th>
            <th>Eliminar</th>
            <th>Editar</th>

        </tr>

    `;

    for(let i = 0; i < empleados.length; i++){

        tabla += `

        <tr>

            <td>${empleados[i].id}</td>
            <td>${empleados[i].nombre}</td>
            <td>${empleados[i].telefono}</td>
            <td>${empleados[i].puesto}</td>
            <td>${empleados[i].salario}</td>

            <td>

                <button onclick="eliminarEmpleado(${empleados[i].id})">

                    ELIMINAR

                </button>

            </td>

            <td>

                <button onclick="editarEmpleado(

                    ${empleados[i].id},
                    '${empleados[i].nombre}',
                    '${empleados[i].telefono}',
                    '${empleados[i].puesto}',
                    '${empleados[i].salario}'

                )">

                    EDITAR

                </button>

            </td>

        </tr>

        `;
    }

    tabla += `</table>`;

    document.getElementById("tablaEmpleados").innerHTML = tabla;
}

cargarEmpleados();


function editarEmpleado(id, nombre, telefono, puesto, salario){

    empleadoEditando = id;

    document.getElementById("nombreEmpleado").value = nombre;

    document.getElementById("telefonoEmpleado").value = telefono;

    document.getElementById("puestoEmpleado").value = puesto;

    document.getElementById("salarioEmpleado").value = salario;
}


async function eliminarEmpleado(id){

    if(confirm("¿Eliminar empleado?")){

await fetch(`${API}/empleados/${id}`, {
            method: "DELETE"
        });

        cargarEmpleados();
    }
}



// =====================================
// PROVEEDORES
// =====================================

async function guardarProveedor(){

    const datosProveedor = {

        nombre: document.getElementById("nombreProveedor").value,

        telefono: document.getElementById("telefonoProveedor").value,

        empresa: document.getElementById("empresaProveedor").value,

        direccion: document.getElementById("direccionProveedor").value
    };



    // EDITAR

    if(proveedorEditando != null){

        await fetch(

await fetch(
    `${API}/proveedores/${proveedorEditando}`,
            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(datosProveedor)
            }
        );

        proveedorEditando = null;

        alert("Proveedor modificado");
    }



    // NUEVO

    else{

await fetch(`${API}/proveedores`, {
            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify(datosProveedor)
        });

        alert("Proveedor guardado");
    }



    document.getElementById("nombreProveedor").value = "";
    document.getElementById("telefonoProveedor").value = "";
    document.getElementById("empresaProveedor").value = "";
    document.getElementById("direccionProveedor").value = "";

    cargarProveedores();
}



async function cargarProveedores(){

const respuesta = await fetch(`${API}/proveedores`);
    const proveedores = await respuesta.json();

    let tabla = `

    <table border="1" cellpadding="10">

        <tr>

            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Empresa</th>
            <th>Direccion</th>
            <th>Eliminar</th>
            <th>Editar</th>

        </tr>

    `;

    for(let i = 0; i < proveedores.length; i++){

        tabla += `

        <tr>

            <td>${proveedores[i].id}</td>

            <td>${proveedores[i].nombre}</td>

            <td>${proveedores[i].telefono}</td>

            <td>${proveedores[i].empresa}</td>

            <td>${proveedores[i].direccion}</td>

            <td>

                <button onclick="eliminarProveedor(${proveedores[i].id})">

                    ELIMINAR

                </button>

            </td>

            <td>

                <button onclick="editarProveedor(

                    ${proveedores[i].id},
                    '${proveedores[i].nombre}',
                    '${proveedores[i].telefono}',
                    '${proveedores[i].empresa}',
                    '${proveedores[i].direccion}'

                )">

                    EDITAR

                </button>

            </td>

        </tr>

        `;
    }

    tabla += `</table>`;

    document.getElementById("tablaProveedores").innerHTML = tabla;
}

cargarProveedores();


async function eliminarProveedor(id){

    if(confirm("¿Eliminar proveedor?")){

await fetch(`${API}/proveedores/${id}`, {
            method: "DELETE"
        });

        cargarProveedores();
    }
}


function editarProveedor(id, nombre, telefono, empresa, direccion){

    proveedorEditando = id;

    document.getElementById("nombreProveedor").value = nombre;

    document.getElementById("telefonoProveedor").value = telefono;

    document.getElementById("empresaProveedor").value = empresa;

    document.getElementById("direccionProveedor").value = direccion;
}

