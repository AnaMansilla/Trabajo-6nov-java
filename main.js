function totalPago (cantidad,categoria){
    const valorTicket= 200;
    let Valortotal = cantidad * valorTicket;
   
    switch (categoria){
        case "Estudiante":
            Valortotal = ( Valortotal - Valortotal * (80/100))
            break;
        case "Trainee":
            Valortotal = (Valortotal - Valortotal * (50/100))
            break;
        case"Junior":
            Valortotal = ( Valortotal - Valortotal * (15/100))
        break;
            
    }
    return Valortotal
}

let BotonResumen= document.getElementById ("alertamensaje")
let formulario = document.getElementById("formulario")

formulario = document.addEventListener("submit", (e)=>{
    e.preventDefault ()
})

BotonResumen.addEventListener("click",()=>{

    let cantidad= document.getElementById("cantidad").value
    let categoria= document.getElementById("inputGroupSelect01").value
    
    let valor = totalPago(cantidad,categoria)
    
    let Mensaje= document.getElementById("alerta1")
    Mensaje.textContent = "Total a Pagar: $" + valor
})

