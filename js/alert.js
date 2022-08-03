 const sideBarAlert = document.getElementById('sidebar-alert');
 const closeButton = document.getElementById('close');
 const todoTitle = document.getElementById('title');
// if there is no title we should say error
export function alertCloseButton(){
    sideBarAlert.style.right = '-100%'
};
export function alertSideBar(mesg,type){
    switch(type){
        case 'green':
            sideBarAlert.style.backgroundColor = 'green';
            break;
        case 'red':
            sideBarAlert.style.backgroundColor = 'red';
            break;
        case 'yellow':
            sideBarAlert.style.backgroundColor = 'yellow';
            break;
        default:
        sideBarAlert.style.backgroundColor  = 'black';
            break;

    };
    sideBarAlert.innerHTML = mesg 
    sideBarAlert.appendChild(closeButton)
    if(!todoTitle.value){
        sideBarAlert.style.right = '0%'
    };
    setTimeout(alertCloseButton , 3000);
};
