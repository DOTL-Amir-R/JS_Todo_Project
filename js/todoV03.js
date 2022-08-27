import {alertCloseButton} from './alert.js';
import {alertSideBar} from './alert.js';


const todoTitle = document.getElementById('title');
const todoTextBox = document.getElementById('desc');
const todoSubmitButton = document.getElementById('submite');
const todoMainList = document.getElementById('main');
const closeButton = document.getElementById('close');
const containerToDo = document.getElementById('todo-box');

// let isFocused = true
containerToDo.style.display = 'flex';
containerToDo.style.flexDirection = 'column';
function getLocalStorageTodoData(){
    const localSavedTodo = localStorage.getItem('todoList');
    const  parseOfTodoList= JSON.parse(localSavedTodo)?.sort((a,b)=>a.id - b.id) || [];
    return parseOfTodoList
};
let saveAllTodo = [...getLocalStorageTodoData()];


const createNewTodo = (titleTodo , descTodo , idTodo , checkTodo)=>{
 // here we will make 3 new html tags for every time we click on the submite button
 const listItem = document.createElement('li');
 listItem.id = (idTodo);

 listItem.setAttribute('check' , checkTodo) ;

 const heading = document.createElement('h3');
 const todoTitleInput = document.createElement('input');
 todoTitleInput.className = 'title-input'

 
 const paraDesc = document.createElement('p');
 heading.setAttribute('id','titleHeading')
 paraDesc.setAttribute('id','descPara')
 const todoDescInput = document.createElement('input');
 todoDescInput.className = 'title-input'

// we make 3 new button edit and delete and update
 const editButton = document.createElement('button');
 editButton.innerHTML = 'Edit'
 editButton.setAttribute('id' , 'edit-btn')
 const updateButton = document.createElement('button');

 if(checkTodo){
    updateButton.setAttribute('class','turn-green-check');
    updateButton.innerHTML = 'Check';
    
 }else{
    updateButton.innerHTML = 'Uncheck'  
    updateButton.setAttribute('class','turn-red-check');
 }
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = 'Delete'

// now we will change innerHTML of h1 and p by the value of our object
todoTitleInput.defaultValue = titleTodo;
todoDescInput.defaultValue = descTodo;

 listItem.appendChild(heading);
 listItem.appendChild(paraDesc);
 listItem.appendChild(editButton);
 listItem.appendChild(updateButton);
 listItem.appendChild(deleteButton);

 heading.appendChild(todoTitleInput);
 paraDesc.appendChild(todoDescInput);
 //now we disable our input 
 todoTitleInput.disabled = 'true';
 todoDescInput.disabled = 'true';




// after we made h1 and p tags to be child of li we should make li to be a child of ul
 todoMainList.appendChild(listItem);


}
function renderNewTodoData(){
    getLocalStorageTodoData().forEach((todo)=>{
        createNewTodo(todo.title , todo.desc , todo.id , todo.check);
    })
}
renderNewTodoData()

// after we got our tags we should take out the value of our text area and title then save it into new object

function todofunction(event){
    event.preventDefault();
    alertSideBar('please add a title first', 'red');
    if(!todoTitle.value) return console.error('please type a title first');
// here we saved our textbox and title value in one object
    const todoObject = {
        id:Date.now(),
        title: todoTitle.value,
        desc: todoTextBox.value,
        check:false,
    };
    saveAllTodo = [...getLocalStorageTodoData()];
    // this is to storage all todos everytime we make them into one object
        saveAllTodo.push(todoObject);
    // now we save this object of all todos into local storage
        localStorage.setItem('todoList',JSON.stringify(saveAllTodo));

    createNewTodo(todoObject.title , todoObject.desc , todoObject.id ,todoObject.check);


};

todoMainList.addEventListener('click', (edit)=>{
    if(edit.target.innerText === 'Edit' ){
        const editLi = edit.target.parentElement;
        editLi.children[0].children[0].disabled = false;
        editLi.children[0].children[0].select();
        editLi.children[0].children[0].style.border = '.02rem solid black'

        editLi.children[1].children[0].disabled = false;
        editLi.children[1].children[0].select();
        editLi.children[1].children[0].style.border = '.02rem solid black'
        edit.target.innerText = 'Save';
        edit.target.addEventListener('click' , () => {
        const titleValueEdited = editLi.children[0].children[0].value;
        const descValueEdited = editLi.children[1].children[0].value;
        const idOfEditedValue = editLi.id

        const filteredTodo = getLocalStorageTodoData().filter((itemEdited)=>itemEdited.id === Number(idOfEditedValue));
        const updateTitleEditedTodo = { ...filteredTodo[0] , title: titleValueEdited, desc: descValueEdited };
        const deleteIdFromLocalStorage = getLocalStorageTodoData().filter((itemEdited)=>itemEdited.id  !== Number(idOfEditedValue));
        const updatedEditedTodoTitleAndDesc = [...deleteIdFromLocalStorage , updateTitleEditedTodo]
        localStorage.setItem('todoList', JSON.stringify(updatedEditedTodoTitleAndDesc));
        todoMainList.innerHTML ="";
        renderNewTodoData();
        })
    };
});
todoMainList.addEventListener('click', (check)=>{
    if(check.target.innerText === 'Uncheck' ){

        const checkId = check.target.parentElement;
        const filteredTodo = getLocalStorageTodoData().filter((item)=>
            item.id === Number(checkId.id)
         );
        filteredTodo[0].check = true
    
        const updateFilterTodo = getLocalStorageTodoData().filter((item)=>
        item.id !== Number(checkId.id)
        );
    
        const checkTodo = [...updateFilterTodo , ...filteredTodo];
        console.log(checkTodo);
        localStorage.setItem('todoList', JSON.stringify(checkTodo));
        todoMainList.innerHTML ="";
        renderNewTodoData();
    }else if(check.target.innerText === 'Check'){
        const checkId = check.target.parentElement;
        const filteredTodo = getLocalStorageTodoData().filter((item)=>
            item.id === Number(checkId.id)
        );
        filteredTodo[0].check = false

        const updateFilterTodo = getLocalStorageTodoData().filter((item)=>
        item.id !== Number(checkId.id)
        );

        const checkTodo = [...updateFilterTodo , ...filteredTodo];
        console.log(checkTodo);
        localStorage.setItem('todoList', JSON.stringify(checkTodo));
        todoMainList.innerHTML ="";
        renderNewTodoData();
    }
});
// todoMainList.addEventListener('click', (edit)=>{
//     if(edit.target.innerText === 'Edit' ){

//         if(isFocused == true){
//             todoTitle.focus();
//             isFocused = false
//         }else{
//             todoTextBox.focus()
//             isFocused = true
//         };
//         // const todoTitleValue=todoTitle.value;
//         // const todoDescValue = todoTextBox.value;

//         const editBtn = edit.target.parentElement;
//         const liChilds = editBtn.children

//         const titleChild = liChilds.item(0);
//         const descChild = liChilds.item(1);
//         titleChild.innerText = todoTitle.value
//         descChild.innerText = todoTextBox.value
        
//     }
// });
closeButton.addEventListener('click' ,alertCloseButton );
todoSubmitButton.addEventListener('click' ,todofunction );
todoMainList.addEventListener('click', (e)=>{
    if(e.target.innerText === 'Delete'){
        // const todoLi = e.target.parentElement

        // console.log(todoLi.id)
        // const filteredTodo = saveAllTodo.filter(
        //     (item) => item.id !== Number(todoLi.id) 
        // );
        // localStorage.setItem('todoList', JSON.stringify(filteredTodo));
        // location.reload();
        //
        //
        //
        const todoLi = e.target.parentElement


        const filteredTodo = getLocalStorageTodoData().filter(
            (item) => item.id !== Number(todoLi.id) 
        );
        // saveAllTodo=filteredTodo
        localStorage.setItem('todoList', JSON.stringify(filteredTodo));
        todoMainList.innerHTML ="";
        renderNewTodoData();
    }   
} );
// // you cant save arraies in localstorage like this : localStorage.setItem('name',[1,2,3,4]); this wont be saved as array in localStorage
// //so we should use jason to save arraies in localStorage

// const testArr = ['abc','abc2','abc3'];
// // in jason we have stringify to change a js array into jason array and we have parse to do this oposite
// localStorage.setItem('name',JSON.stringify(testArr));


// //if you want to merge 2 arraies into one array you need to use ... to do that like this
// let arr1 = [10,20,30];
// let arr2 = [40,50,60];

// let merge = [...arr1 , ...arr2]
// console.log(merge)
// //for objects this is the same

// //Math
// // math is a object that will allow us to use math functions in js 
// console.log(Math.round(Math.random() * 10 ))
// // this line code isnt good for making random id so we will
// // this is a construction function
// const date = new Date();
// // get time this will give you distance from 1900+ till today and the future as a milisecond
// console.log(date.getTime());
// // Date.now is the same as the code below
// console.log(Date.now())
// // we want to delete one unit from an array
// const arrayTest = [100,200,300,400,500];
// const copyMap = arrayTest.map((item)=> item * 2 );
// console.log(copyMap);
// const copyEach = arrayTest.forEach((item)=> item * 2 );
// console.log(copyEach);
// // foreach wont return any code from itself but map it will return the code for you
// // here we want to use filter so we can delete one unit in the array
// const filteredItems = arrayTest.filter((item)=> item !== 300);
// //this (!==) wants to say if item isnt equal to this number(300) you can save it into the filterItems
// console.log(filteredItems);
//arr.sort() we will use this for sorting data
//arr.sort((a,b)=>a-b) we will use this for numbers