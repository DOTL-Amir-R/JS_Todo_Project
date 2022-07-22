    const todoTitle = document.getElementById('title');
    const todoTextBox = document.getElementById('desc');
    const todoSubmitButton = document.getElementById('submite');
    const todoMainList = document.getElementById('main');
    const sideBarAlert = document.getElementById('sidebar-alert');
    const closeButton = document.getElementById('close');
    const containerToDo = document.getElementById('todo-box');
    const bodyContainer = document.getElementById('body');

    containerToDo.style.display = 'flex';
    containerToDo.style.flexDirection = 'column';
    // const alertClasses = sideBarAlert.classList;

    function alertCloseButton(){
        sideBarAlert.style.right = '-100%'
    };
    function alertSideBar(mesg,type){
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

// after we got our tags we should take out the value of our text area and title then save it into new object

 function todofunction(event){
     event.preventDefault();
     console.log('hi');
     alertSideBar('please add a title first');
     if(!todoTitle.value) return console.error('please type a title first');
 // here we saved our textbox and title value in one object
    const todoObject = {
        title: todoTitle.value,
        desc: todoTextBox.value,
    };
 // here we will make 3 new html tags for every time we click on the submite button
    const listItem = document.createElement('li');
    const heading = document.createElement('h1');
    const paraDesc = document.createElement('p');

// we make 3 new button edit and delete and update
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit'
    editButton.setAttribute('id' , 'edit-btn')
    console.log(editButton)
    const updateButton = document.createElement('button');
    updateButton.innerHTML = 'Update'    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'
    
    

    const editFieldDesc = document.createElement('input');
    const editFieldTitle = document.createElement('input');
    const editFieldTitleLabel = document.createElement('label');
    const editFieldDescLabel = document.createElement('label');
    const saveButton = document.createElement('button');
    const closeEdit = document.createElement('button');
    const containerEditButton = document.createElement('div');
    //here we give some styles to our container 
    containerEditButton.style.display = 'flex';
    containerEditButton.style.alignItems = 'flex-start';
    containerEditButton.style.flexDirection = 'column';
    saveButton.innerHTML = 'Save';
    closeEdit.innerHTML = 'close';
    editFieldTitleLabel.innerHTML = 'Title';
    editFieldDescLabel.innerHTML = 'Description';

// now we make functions for our 3 button for each one of them 
function editTodoTitleDesc(){
    if(containerEditButton.style.display = 'none'){
        containerEditButton.style.display = 'flex'
    }
    // now we will close edit button
    function closeEditButton(){
        containerEditButton.style.display = 'none'
    }
    function saveEditValues(){
        const editValues = {
            editDesc:editFieldDesc.value,
            editTitle:editFieldTitle.value,
        };
        paraDesc.innerHTML = editValues.editDesc;
        heading.innerHTML = editValues.editTitle;
        
    };
    saveButton.addEventListener('click' , saveEditValues );
    closeEdit.addEventListener('click' , closeEditButton );
}

 // now we will change innerHTML of h1 and p by the value of our object
    heading.innerHTML = todoObject.title;
    paraDesc.innerHTML = todoObject.desc;
    // console.log(listItem);
    listItem.appendChild(heading);
    listItem.appendChild(paraDesc);
    listItem.appendChild(editButton);
    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);



    // we say that input value is equal to description text content so we cant edit them better
    editFieldDesc.value = paraDesc.textContent;
    editFieldTitle.value = heading.textContent;
    containerEditButton.appendChild(saveButton);
    containerEditButton.appendChild(closeEdit);
    containerEditButton.appendChild(editFieldDescLabel);
    containerEditButton.appendChild(editFieldDesc);
    containerEditButton.appendChild(editFieldTitleLabel);
    containerEditButton.appendChild(editFieldTitle);
    listItem.appendChild(containerEditButton);
    containerEditButton.style.display = 'none'
    // console.log(buttonContainer)
    // listItem.innerHTML += buttonContainer;
    // console.log(listItem)

 // after we made h1 and p tags to be child of li we should make li to be a child of ul
    todoMainList.appendChild(listItem);
    editButton.addEventListener('click' , editTodoTitleDesc );


 };



//  todoSubmitButton.addEventListener('click' ,alertSideBar );
 closeButton.addEventListener('click' ,alertCloseButton );
 todoSubmitButton.addEventListener('click' ,todofunction );

