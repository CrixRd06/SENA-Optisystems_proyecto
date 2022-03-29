const tabOne = document.getElementById("one-tab");
const tabTwo = document.getElementById("two-tab");
const tabthree = document.getElementById("three-tab");

const panelOne = document.getElementById("one-panel");
const panelTwo = document.getElementById("two-panel");
const panelThree = document.getElementById("three-panel");

const inputFecha = document.getElementById("fecha");
const inputHora = document.getElementById("hora");
const inputCantidad = document.getElementById("cantidad");
const inputProducto = document.getElementById("producto");
const inputEstado = document.getElementById("estado");
const inputAnexos = document.getElementById("anexos");

const inputs = document.getElementsByClassName("inputsForm")

function editProvider(){
    
    for (var i = 0; i < 7; i++) {
        let n = 0;
        n += i;
        inputs[n].disabled = false;
     }
    console.log(inputs)
}

function openProvider(element, tab){
    if(element != null){
        let fecha = element.childNodes[3].childNodes[0].nodeValue;
        let hour = element.childNodes[5].childNodes[0].nodeValue;
        let quantity = element.childNodes[7].childNodes[0].nodeValue;
        let product = element.childNodes[9].childNodes[0].nodeValue;
        let condition = element.childNodes[11].childNodes[0].nodeValue;
        let annexes = element.childNodes[13].childNodes[0].nodeValue;
        

        inputFecha.value = fecha;
        inputHora.value = hour;
        inputCantidad.value = quantity;
        inputProducto.value = product;
        inputEstado.value = condition;
        inputAnexos.value = annexes;
    }
    
    switch (tab){
        case 0:
            panelOne.style.display = "flex";
            panelTwo.style.display = "none";
            panelThree.style.display = "none";
            tabOne.classList.add("tabChecked");
            tabTwo.classList.remove("tabChecked");
            tabthree.classList.remove("tabChecked");
        break;
        case 1:
            panelOne.style.display = "none";
            panelTwo.style.display = "flex";
            panelThree.style.display = "none";
            tabOne.classList.remove("tabChecked");
            tabTwo.classList.add("tabChecked");
            tabthree.classList.remove("tabChecked");
        break;
        case 2:
            panelOne.style.display = "none";
            panelTwo.style.display = "none";
            panelThree.style.display = "flex";
            tabOne.classList.remove("tabChecked");
            tabTwo.classList.remove("tabChecked");
            tabthree.classList.add("tabChecked");
        break;

    }
}