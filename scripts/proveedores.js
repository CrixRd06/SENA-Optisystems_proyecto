const tabOne = document.getElementById("one-tab");
const tabTwo = document.getElementById("two-tab");
const tabthree = document.getElementById("three-tab");

const panelOne = document.getElementById("one-panel");
const panelTwo = document.getElementById("two-panel");
const panelThree = document.getElementById("three-panel");

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");

const inputs = document.getElementsByClassName("inputsForm")

function editProvider(){
    
    for (var i = 0; i < 4; i++) {
        let n = 0;
        n += i;
        inputs[n].disabled = false;
     }
    console.log(inputs)
}

function openProvider(element, tab){
    if(element != null){
        let name = element.childNodes[1].childNodes[0].nodeValue;
        let email = element.childNodes[3].childNodes[0].nodeValue;
        let phone = element.childNodes[5].childNodes[0].nodeValue;
        let adress = element.childNodes[7].childNodes[0].nodeValue;

        inputNombre.value = name;
        inputCorreo.value = email;
        inputTelefono.value = phone;
        inputDireccion.value = adress;
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

