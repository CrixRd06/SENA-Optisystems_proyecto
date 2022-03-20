const tabList = document.getElementById("one-tab");
const tabAdmin = document.getElementById("three-tab");
const panelOne = document.getElementById("one-panel");
const panelThree = document.getElementById("three-panel");

const inputFecha = document.getElementById("fecha");
const inputHora = document.getElementById("hora");
const inputCantidad = document.getElementById("cantidad");
const inputProducto = document.getElementById("producto");
const inputEstado = document.getElementById("estado");
const inputAnexos = document.getElementById("anexos");

const inputs = document.getElementsByClassName("inputsForm")

var panel = 0;

function editProvider(){
    
    for (var i = 0; i < 7; i++) {
        let n = 0;
        n += i;
        inputs[n].disabled = false;
     }
    console.log(inputs)
}

function openProvider(element){
    if(element != null){
        let fecha = element.childNodes[1].childNodes[0].nodeValue;
        let hour = element.childNodes[3].childNodes[0].nodeValue;
        let quantity = element.childNodes[5].childNodes[0].nodeValue;
        let product = element.childNodes[7].childNodes[0].nodeValue;
        let condition = element.childNodes[9].childNodes[0].nodeValue;
        let annexes = element.childNodes[11].childNodes[0].nodeValue;

        inputFecha.value = fecha;
        inputHora.value = hour;
        inputCantidad.value = quantity;
        inputProducto.value = product;
        inputEstado.value = condition;
        inputAnexos.value = annexes;
    }
    
    switch (panel){
        case 0:
            panelOne.style.display = "none";
            panelThree.style.display = "flex";
            tabAdmin.classList.add("tabChecked");
            tabList.classList.remove("tabChecked")
            panel = 1;
        break;
        case 1:
            panelOne.style.display = "flex";
            panelThree.style.display = "none";
            tabList.classList.add("tabChecked");
            tabAdmin.classList.remove("tabChecked")
            panel = 0;
        break;
    }
}