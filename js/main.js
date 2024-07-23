// variable para almacenar las tareas
let tareas = [];
let cantidadTareas = 0;

// la función para agregar tareas
function agregarTarea() {
    let tarea = prompt("Agrega una tarea: ");
    if (tarea) {
        tareas[cantidadTareas] = tarea;
        cantidadTareas++; 
        alert("Tarea agregada: " + tarea);
    } else {
        alert("No ingresaste ninguna tarea");
    }
}

// la función que muestra las tareas
function mostrarTareas() {
    if (cantidadTareas === 0) {
        alert("No haz puesto tareas.");
    } else {
        let mensaje = "Lista de tareas:\n";
        for (let i = 0; i < cantidadTareas; i++) {
            mensaje += (i + 1) + ". " + tareas[i] + "\n";
        }
        alert(mensaje);
    }
}

// la funcion para eliminar una tarea
function eliminarTarea() {
    if (cantidadTareas === 0) {
        alert("No hay tareas en la lista para eliminar.");
    } else {
        let mensaje = "Seleccionar el número de la tarea a eliminar:\n";
        for (let i = 0; i < cantidadTareas; i++) {
            mensaje += (i + 1) + ". " + tareas[i] + "\n";
        }
        let seleccion = parseInt(prompt(mensaje)) - 1;
        if (seleccion >= 0 && seleccion < cantidadTareas) {
            let tareaEliminada = tareas[seleccion];
            for (let i = seleccion; i < cantidadTareas - 1; i++) {
                tareas[i] = tareas[i + 1];
            }
            cantidadTareas--;
            alert("Tarea eliminada: " + tareaEliminada);
        } else {
            alert("Número de tarea erroneo.");
        }
    }
}

// el menu principal
let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Agregar tarea \n2. Mostrar tareas \n3. Eliminar tarea \n4. Salir");
    if (opcion === "1") {
        agregarTarea();
    } else if (opcion === "2") {
        mostrarTareas();
    } else if (opcion === "3") {
        eliminarTarea();
    } else if (opcion === "4") {
        alert("Chau chau!");
    } else {
        alert("Opción incorrecta. Pruebe de nuevo");
    }
} while (opcion !== "4");
