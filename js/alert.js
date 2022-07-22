const sideBarAlert = document.getElementById('sidebar-alert');
const closeButton = document.getElementById('close');

// if there is no title we should say error
function alertCloseButton(){
    sideBarAlert.setAttribute('class' , 'off')
}
function alertSideBar(mesg){
    sideBarAlert.innerHTML = mesg + closeButton.innerHTML;
    if(!todoTitle.value){
        sideBarAlert.setAttribute('class' , 'sidebar-alert');
        
    }
}

export function closeButtonTwo(){
    alertCloseButton()
}
export function alertSide(){
    alertSideBar('mesg')
}