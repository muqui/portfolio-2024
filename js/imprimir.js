function imprimirTicket(event) {


    event.preventDefault();
    var folio = document.getElementById("folio").value;
    var nombre = document.getElementById("nombre").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var marca = document.getElementById("marca").value;
    var imei = document.getElementById("imei").value;
    var servicio = document.getElementById("servicio").value;
    var entrega = document.getElementById("entrega").value;
    var total = document.getElementById("total").value;
    var abono = document.getElementById("abono").value;
    var resto = document.getElementById("resto").value;
    var observaciones = document.getElementById("observaciones").value; 
    //Crear un nuevo div
    var printContent = '<div class="mi-clase"><p><strong>Folio:</strong> '+folio+'</p><a href="https://www.google.com">Enlace a Google</a></div>';

  let contenido = `<div>
                       <h1> Nota de servicio </h1>
                       <h2> Navarro Tech </h2>
                       <p> <strong>Folio:</strong> ${folio} </p>
                       <p> <strong>Nombre:</strong> ${nombre} </p>
                       <p> <strong>Direccion:</strong> ${direccion} </p>
                       <p> <strong>Correo:</strong> ${correo} </p>
                       <p> <strong>celular:</strong> ${celular} </p>
                       <p> <strong>Marca:</strong> ${marca} </p>
                       <p> <strong>IMEI:</strong> ${imei} </p>
                       <p> <strong>Servicio:</strong> ${servicio} </p>
                       <p> <strong>Fecha de Entrega:</strong> ${entrega} </p>
                       <p> <strong>Costo Total $:</strong> ${total} </p>
                       <p> <strong>Abono $:</strong> ${abono} </p>
                       <p> <strong>Resto $:</strong> ${resto} </p>
                       <p> <strong>Observaciones: </strong> ${observaciones} </p>
  
                   </div>`
   

    console.log(contenido)
    var originalContent = window.document.body.innerHTML;
    window.document.body.innerHTML = contenido;
    window.print();
    window.document.body.innerHTML = originalContent;
}