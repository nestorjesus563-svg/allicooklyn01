//PLATILLOS

const platillos = [

//VEGETARIANO

{
    categoria: "vegetariano",

    nombre: "Ensalada de Quinoa",

    tiempo: "20 min",

    personas: "2 personas",

    imagen: "ensalada_quinoa.jpg",

    ingredientes: [
        "Quinoa",
        "Tomate",
        "Pepino",
        "Limón",
        "Sal",
        "Aceite de oliva"
    ],

    preparacion: [
        "Lava la quinoa y cuécela durante 15 minutos.",
        "Déjala reposar 5 minutos.",
        "Corta tomate y pepino.",
        "Mezcla todos los ingredientes.",
        "Agrega limón y sal al gusto."
    ],

    precio: 80
},

{
    categoria: "vegetariano",

    nombre: "Tacos de Champiñones",

    tiempo: "25 min",

    personas: "3 personas",

    imagen: "tacos_champinones.jpg",

    ingredientes: [
        "Champiñones",
        "Tortillas",
        "Cebolla",
        "Cilantro",
        "Aceite",
        "Sal"
    ],

    preparacion: [
        "Lava y corta los champiñones.",
        "Fríe cebolla en aceite caliente.",
        "Agrega los champiñones y cocina 10 minutos.",
        "Calienta las tortillas.",
        "Sirve con cilantro."
    ],

    precio: 90
},

//VEGANO

{
    categoria: "vegano",

    nombre: "Tacos de Nopal",

    tiempo: "20 min",

    personas: "3 personas",

    imagen: "tacos_nopal.jpg",

    ingredientes: [
        "Nopal",
        "Tortillas",
        "Cebolla",
        "Cilantro",
        "Aceite",
        "Sal"
    ],

    preparacion: [
        "Lava y corta los nopales.",
        "Cocina los nopales durante 10 minutos.",
        "Fríe cebolla en una sartén.",
        "Agrega los nopales y mezcla.",
        "Sirve en tortillas con cilantro."
    ],

    precio: 85
},

//SIN LACTOSA

{
    categoria: "sin lactosa",

    nombre: "Pollo Asado con Verduras",

    tiempo: "40 min",

    personas: "4 personas",

    imagen: "pollo_verduras.jpg",

    ingredientes: [
        "Pollo",
        "Papa",
        "Zanahoria",
        "Aceite de oliva",
        "Sal",
        "Pimienta"
    ],

    preparacion: [
        "Precalienta el horno a 180 grados.",
        "Corta las verduras en trozos.",
        "Coloca el pollo y las verduras en una bandeja.",
        "Agrega aceite, sal y pimienta.",
        "Hornea durante 35 minutos."
    ],

    precio: 160
},

//BAJO EN CARBOHIDRATOS

{
    categoria: "bajo en carbohidratos",

    nombre: "Ensalada de Pollo",

    tiempo: "20 min",

    personas: "2 personas",

    imagen: "ensalada_pollo.jpg",

    ingredientes: [
        "Pollo",
        "Lechuga",
        "Pepino",
        "Tomate",
        "Aceite de oliva",
        "Sal"
    ],

    preparacion: [
        "Cocina el pollo en una sartén.",
        "Lava y corta las verduras.",
        "Mezcla todos los ingredientes.",
        "Agrega aceite y sal al gusto.",
        "Sirve fresca."
    ],

    precio: 110
},

//SIN AZUCAR

{
    categoria: "sin azucar",

    nombre: "Omelette de Champiñones",

    tiempo: "15 min",

    personas: "1 persona",

    imagen: "omelette_champinones.jpg",

    ingredientes: [
        "Huevos",
        "Champiñones",
        "Queso",
        "Mantequilla",
        "Sal"
    ],

    preparacion: [
        "Lava y corta los champiñones.",
        "Fríe los champiñones en mantequilla.",
        "Bate los huevos.",
        "Agrega los huevos al sartén.",
        "Dobla el omelette y sirve."
    ],

    precio: 80
},

//ALTO EN PROTEINA

{
    categoria: "alto en proteina",

    nombre: "Pechuga de Pollo Asada",

    tiempo: "30 min",

    personas: "2 personas",

    imagen: "pechuga_pollo.jpg",

    ingredientes: [
        "Pechuga de pollo",
        "Ajo",
        "Aceite de oliva",
        "Sal",
        "Pimienta"
    ],

    preparacion: [
        "Sazona las pechugas con sal y pimienta.",
        "Calienta aceite en una sartén.",
        "Cocina las pechugas durante 8 minutos por lado.",
        "Agrega ajo picado.",
        "Sirve caliente."
    ],

    precio: 150
},

//SIN RESTRICCIONES

{
    categoria: "sin restricciones",

    nombre: "Pizza Pepperoni",

    tiempo: "40 min",

    personas: "5 personas",

    imagen: "pizza_pepperoni.jpg",

    ingredientes: [
        "Masa para pizza",
        "Queso mozzarella",
        "Pepperoni",
        "Salsa de tomate",
        "Orégano"
    ],

    preparacion: [
        "Extiende la masa para pizza.",
        "Agrega salsa de tomate.",
        "Coloca queso mozzarella y pepperoni.",
        "Hornea durante 20 minutos.",
        "Agrega orégano y sirve."
    ],

    precio: 180
}

];

//MOSTRAR RECETAS

function mostrarRecetas(){


    const menu = document.getElementById("menurecetas");

    menu.innerHTML = "";

    let veg = document.getElementById("vegetariano").checked;

    let vega = document.getElementById("vegano").checked;

    let lactosa = document.getElementById("sinlac").checked;

    let carbohidratos = document.getElementById("bajocarbo").checked;

    let azucar = document.getElementById("azucar").checked;

    let proteina = document.getElementById("proteina").checked;

    let restricciones = document.getElementById("restriccion").checked;

    if(
        !veg &&
        !vega &&
        !lactosa &&
        !carbohidratos &&
        !azucar &&
        !proteina &&
        !restricciones
    ){

        alert("Selecciona al menos una preferencia");

        return;
    }

    for(let i = 0; i < platillos.length; i++){

        if(

            (veg && platillos[i].categoria == "vegetariano") ||

            (vega && platillos[i].categoria == "vegano") ||

            (lactosa && platillos[i].categoria == "sin lactosa") ||

            (carbohidratos && platillos[i].categoria == "bajo en carbohidratos") ||

            (azucar && platillos[i].categoria == "sin azucar") ||

            (proteina && platillos[i].categoria == "alto en proteina") ||

            (restricciones && platillos[i].categoria == "sin restricciones")

        ){

            let ingredientesHTML = "";

            let preparacionHTML = "";

            for(let j = 0; j < platillos[i].ingredientes.length; j++){

                ingredientesHTML += `
                    <li>${platillos[i].ingredientes[j]}</li>
                `;
            }

            for(let j = 0; j < platillos[i].preparacion.length; j++){

                preparacionHTML += `
                    <li>${platillos[i].preparacion[j]}</li>
                `;
            }

            menu.innerHTML += `

            <div class="platillo">

                <h1>${platillos[i].nombre}</h1>

                <h2>
                    ⏱ ${platillos[i].tiempo}
                    | 👥 ${platillos[i].personas}
                </h2>

                <img
                src="${platillos[i].imagen}"
                class="imagen-receta">

                <h3>Ingredientes</h3>

                <ul>
                    ${ingredientesHTML}
                </ul>

                <h3>Preparación</h3>

                <ol>
                    ${preparacionHTML}
                </ol>

                <h2>
                    Precio: $${platillos[i].precio}
                </h2>

                <label>Cantidad</label>

                <input
                type="number"
                min="0"
                value="0"
                id="cantidad${i}">

            </div>

            `;
        }
    }

    menu.innerHTML += `

        <button onclick="generarTicket()">

            Generar Ticket

        </button>

    `;
}

//GENERAR TICKET

function generarTicket(){

    const ticket = document.getElementById("ticket");

    ticket.innerHTML = "";

    let nombre = document.getElementById("nombre").value;

    if(nombre == ""){

        alert("Escribe tu nombre");

        return;
    }

    let total = 0;

    let productosSeleccionados = 0;

    let contenido = `

        <div class="ticketFinal">

        <h1>Ticket de Compra</h1>

        <p><b>Cliente:</b> ${nombre}</p>

        <hr>

    `;

    for(let i = 0; i < platillos.length; i++){

        let cantidadInput = document.getElementById(`cantidad${i}`);

        if(cantidadInput){

            let cantidad = parseInt(cantidadInput.value);

            if(cantidad > 0){

                productosSeleccionados++;

                let subtotal = cantidad * platillos[i].precio;

                total += subtotal;

                contenido += `

                    <p>

                    ${platillos[i].nombre}

                    x ${cantidad}

                    = $${subtotal}

                    </p>

                `;
            }
        }
    }

    if(productosSeleccionados == 0){

        alert("Selecciona al menos un platillo");

        return;
    }

   contenido += `

    <hr>

    <h2>Total: $${total}</h2>

    <button onclick="guardarPedido()">

        GUARDAR PEDIDO

    </button>

    </div>

`;

    ticket.innerHTML = contenido;
}





//GUARDAR PEDIDO

async function guardarPedido() {

    let nombre = document.getElementById("nombre").value;

    let total = 0;

    let listaProductos = "";

    for(let i = 0; i < platillos.length; i++){

        let cantidadInput = document.getElementById(`cantidad${i}`);

        if(cantidadInput){

            let cantidad = parseInt(cantidadInput.value);

            if(cantidad > 0){

                let subtotal = cantidad * platillos[i].precio;

                total += subtotal;

                listaProductos +=
                platillos[i].nombre +
                " x " +
                cantidad +
                ", ";
            }
        }
    }

    const datosCliente = {

        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,

        vegetariano: document.getElementById("vegetariano").checked,
        vegano: document.getElementById("vegano").checked,
        sinlac: document.getElementById("sinlac").checked,
        bajocarbo: document.getElementById("bajocarbo").checked,
        azucar: document.getElementById("azucar").checked,
        proteina: document.getElementById("proteina").checked,
        restriccion: document.getElementById("restriccion").checked
    };

    const datosPedido = {

        cliente: nombre,
        productos: listaProductos,
        total: total
    };

    try {

        // GUARDAR CLIENTE

        const respuestaCliente = await fetch("http://localhost:3000/clientes", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datosCliente)
        });

        const resultadoCliente = await respuestaCliente.text();

        console.log(resultadoCliente);


        // GUARDAR PEDIDO

        const respuestaPedido = await fetch("http://localhost:3000/pedidos", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datosPedido)
        });

        const resultadoPedido = await respuestaPedido.text();

        alert(resultadoPedido);


        // LIMPIAR FORMULARIO

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";

        document.getElementById("vegetariano").checked = false;
        document.getElementById("vegano").checked = false;
        document.getElementById("sinlac").checked = false;
        document.getElementById("bajocarbo").checked = false;
        document.getElementById("azucar").checked = false;
        document.getElementById("proteina").checked = false;
        document.getElementById("restriccion").checked = false;

        document.getElementById("menurecetas").innerHTML = "";

        document.getElementById("ticket").innerHTML = "";

    } catch(error){

        console.log(error);

        alert("Error al guardar");
    }
}