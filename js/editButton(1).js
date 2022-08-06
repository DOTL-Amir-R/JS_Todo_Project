

const listItem = document.createElement('li');
const editButton = document.createElement('button');
editButton.innerHTML = 'Edit';
editButton.setAttribute('id' , 'edit-btn');

const editFieldDesc = document.createElement('input');
const editFieldTitle = document.createElement('input');
const editFieldTitleLabel = document.createElement('label');
const editFieldDescLabel = document.createElement('label');
const saveButton = document.createElement('button');
// const heading = document.createElement('h1');
// const paraDesc = document.createElement('p');


const closeEdit = document.createElement('button');
export const containerEditButton = document.createElement('div');

containerEditButton.style.display = 'flex';
containerEditButton.style.alignItems = 'flex-start';
containerEditButton.style.flexDirection = 'column';

saveButton.innerHTML = 'Save';
closeEdit.innerHTML = 'close';
editFieldTitleLabel.innerHTML = 'Title';
editFieldDescLabel.innerHTML = 'Description';

containerEditButton.appendChild(saveButton);
containerEditButton.appendChild(closeEdit);
containerEditButton.appendChild(editFieldDescLabel);
containerEditButton.appendChild(editFieldDesc);
containerEditButton.appendChild(editFieldTitleLabel);
containerEditButton.appendChild(editFieldTitle);
listItem.appendChild(containerEditButton);
containerEditButton.style.display = 'none'
// now we make functions for our 3 button for each one of them 
export function editTodoTitleDesc(){
    const descPara = document.getElementById('descPara')
    const heading = document.getElementById('titleHeading')
    if(containerEditButton.style.display = 'none'){
        containerEditButton.style.display = 'flex'
        console.log('flex')
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
        descPara.innerHTML = editValues.editDesc;
        heading.innerHTML = editValues.editTitle;
        
    };
    saveButton.addEventListener('click' , saveEditValues );
    closeEdit.addEventListener('click' , closeEditButton );

}
