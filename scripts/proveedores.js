const tabList = document.getElementById("one-tab");
const tabAdmin = document.getElementById("three-tab");
const panelOne = document.getElementById("one-panel");
const panelThree = document.getElementById("three-panel");

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");

const inputs = document.getElementsByClassName("inputsForm")

var panel = 0;

function editProvider(){
    
    for (var i = 0; i < 4; i++) {
        let n = 0;
        n += i;
        inputs[n].disabled = false;
     }
    console.log(inputs)
}

function openProvider(element){
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

