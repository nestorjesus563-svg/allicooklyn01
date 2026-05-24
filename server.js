const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const conexion = mysql.createConnection({

    host: "kodama.proxy.rlwy.net",
    user: "root",
    password: "PqvXYqqLlDqPrsvHccCfIHQpYKOcKcie",
    database: "railway",
    port: 50989
});

conexion.connect((error) => {

    if(error){

        console.log(error);

    }else{

        console.log("Conectado a MySQL");
    }
});



// =========================
// GUARDAR CLIENTES
// =========================

app.post("/clientes", (req, res) => {

    const datos = req.body;

    const sql = `

    INSERT INTO clientes
    (
        nombre,
        edad,
        telefono,
        direccion,
        vegetariano,
        vegano,
        sinlac,
        bajocarbo,
        azucar,
        proteina,
        restriccion
    )

    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    `;

    const valores = [

        datos.nombre,
        datos.edad,
        datos.telefono,
        datos.direccion,

        datos.vegetariano,
        datos.vegano,
        datos.sinlac,

        datos.bajocarbo,
        datos.azucar,
        datos.proteina,
        datos.restriccion
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al guardar cliente");

        }else{

            res.send("Cliente guardado");
        }
    });
});



// =========================
// MOSTRAR CLIENTES
// =========================

app.get("/clientes", (req, res) => {

    const sql = "SELECT * FROM clientes";

    conexion.query(sql, (error, resultados) => {

        if(error){

            console.log(error);

            res.json([]);

        }else{

            res.json(resultados);
        }
    });
});


// =========================
// ELIMINAR CLIENTE
// =========================

app.delete("/clientes/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM clientes WHERE id = ?";

    conexion.query(sql, [id], (error) => {

        if(error){

            console.log(error);

            res.send("Error al eliminar cliente");

        }else{

            res.send("Cliente eliminado");
        }
    });
});



// =========================
// EDITAR CLIENTE
// =========================

app.put("/clientes/:id", (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `

    UPDATE clientes SET

    nombre = ?,
    edad = ?,
    telefono = ?,
    direccion = ?

    WHERE id = ?

    `;

    const valores = [

        datos.nombre,
        datos.edad,
        datos.telefono,
        datos.direccion,
        id
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al modificar cliente");

        }else{

            res.send("Cliente modificado");
        }
    });
});




// =========================
// GUARDAR PEDIDOS
// =========================

app.post("/pedidos", (req, res) => {

    const datos = req.body;

    const sql = `

    INSERT INTO pedidos
    (
        cliente,
        productos,
        total
    )

    VALUES (?, ?, ?)

    `;

    const valores = [

        datos.cliente,
        datos.productos,
        datos.total
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al guardar pedido");

        }else{

            res.send("Pedido guardado");
        }
    });
});



// =========================
// MOSTRAR PEDIDOS
// =========================

app.get("/pedidos", (req, res) => {

    const sql = "SELECT * FROM pedidos";

    conexion.query(sql, (error, resultados) => {

        if(error){

            console.log(error);

            res.json([]);

        }else{

            res.json(resultados);
        }
    });
});

// =========================
// ELIMINAR PEDIDO
// =========================

app.delete("/pedidos/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM pedidos WHERE id = ?";

    conexion.query(sql, [id], (error) => {

        if(error){

            console.log(error);

            res.send("Error al eliminar pedido");

        }else{

            res.send("Pedido eliminado");
        }
    });
});



// =========================
// EDITAR PEDIDO
// =========================

app.put("/pedidos/:id", (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `

    UPDATE pedidos SET

    cliente = ?,
    productos = ?,
    total = ?

    WHERE id = ?

    `;

    const valores = [

        datos.cliente,
        datos.productos,
        datos.total,
        id
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al modificar pedido");

        }else{

            res.send("Pedido modificado");
        }
    });
});


// =========================
// GUARDAR EMPLEADOS
// =========================

app.post("/empleados", (req, res) => {

    const datos = req.body;

    const sql = `

    INSERT INTO empleados
    (
        nombre,
        telefono,
        puesto,
        salario
    )

    VALUES (?, ?, ?, ?)

    `;

    const valores = [

        datos.nombre,
        datos.telefono,
        datos.puesto,
        datos.salario
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al guardar empleado");

        }else{

            res.send("Empleado guardado");
        }
    });
});



// =========================
// MOSTRAR EMPLEADOS
// =========================

app.get("/empleados", (req, res) => {

    const sql = "SELECT * FROM empleados";

    conexion.query(sql, (error, resultados) => {

        if(error){

            console.log(error);

            res.json([]);

        }else{

            res.json(resultados);
        }
    });
});


// =========================
// ELIMINAR EMPLEADO
// =========================

app.delete("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM empleados WHERE id = ?";

    conexion.query(sql, [id], (error) => {

        if(error){

            console.log(error);

            res.send("Error al eliminar empleado");

        } else {

            res.send("Empleado eliminado");
        }
    });
});



// =========================
// MODIFICAR EMPLEADO
// =========================

app.put("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `

    UPDATE empleados

    SET
        nombre = ?,
        telefono = ?,
        puesto = ?,
        salario = ?

    WHERE id = ?

    `;

    const valores = [

        datos.nombre,
        datos.telefono,
        datos.puesto,
        datos.salario,

        id
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al modificar empleado");

        } else {

            res.send("Empleado modificado");
        }
    });
});




// =========================
// ELIMINAR EMPLEADO
// =========================

app.delete("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM empleados WHERE id = ?";

    conexion.query(sql, [id], (error) => {

        if(error){

            console.log(error);

            res.send("Error al eliminar empleado");

        }else{

            res.send("Empleado eliminado");
        }
    });
});



// =========================
// EDITAR EMPLEADO
// =========================

app.put("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `

    UPDATE empleados SET

    nombre = ?,
    telefono = ?,
    puesto = ?,
    salario = ?

    WHERE id = ?

    `;

    const valores = [

        datos.nombre,
        datos.telefono,
        datos.puesto,
        datos.salario,
        id
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al modificar empleado");

        }else{

            res.send("Empleado modificado");
        }
    });
});



// =========================
// MOSTRAR PLATILLOS
// =========================

app.get("/platillos", (req, res) => {

    const sql = "SELECT * FROM platillos";

    conexion.query(sql, (error, resultados) => {

        if(error){

            console.log(error);

            res.json([]);

        }else{

            res.json(resultados);
        }
    });
});



// =========================
// PAGINA PRINCIPAL
// =========================

app.get("/", (req, res) => {

    res.send("Servidor funcionando");
});



// GUARDAR PROVEEDOR

app.post("/proveedores", (req, res) => {

    const datos = req.body;

    const sql = `
    INSERT INTO proveedores
    (nombre, telefono, empresa, direccion)

    VALUES (?, ?, ?, ?)
    `;

    const valores = [

        datos.nombre,
        datos.telefono,
        datos.empresa,
        datos.direccion
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al guardar proveedor");

        } else {

            res.send("Proveedor guardado");
        }
    });
});



// MOSTRAR PROVEEDORES

app.get("/proveedores", (req, res) => {

    const sql = "SELECT * FROM proveedores";

    conexion.query(sql, (error, resultados) => {

        if(error){

            console.log(error);

            res.json([]);

        } else {

            res.json(resultados);
        }
    });
});


// =========================
// ELIMINAR PROVEEDOR
// =========================

app.delete("/proveedores/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM proveedores WHERE id = ?";

    conexion.query(sql, [id], (error) => {

        if(error){

            console.log(error);

            res.send("Error al eliminar proveedor");

        }else{

            res.send("Proveedor eliminado");
        }
    });
});



// =========================
// EDITAR PROVEEDOR
// =========================

app.put("/proveedores/:id", (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `

    UPDATE proveedores SET

    nombre = ?,
    telefono = ?,
    empresa = ?,
    direccion = ?

    WHERE id = ?

    `;

    const valores = [

        datos.nombre,
        datos.telefono,
        datos.empresa,
        datos.direccion,
        id
    ];

    conexion.query(sql, valores, (error) => {

        if(error){

            console.log(error);

            res.send("Error al modificar proveedor");

        }else{

            res.send("Proveedor modificado");
        }
    });
});



// =========================
// INICIAR SERVIDOR
// =========================

app.listen(3000, () => {

    console.log("Servidor corriendo en puerto 3000");
});

