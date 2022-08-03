import {alertCloseButton} from './alert.js';
import {alertSideBar} from './alert.js';


const todoTitle = document.getElementById('title');
const todoTextBox = document.getElementById('desc');
const todoSubmitButton = document.getElementById('submite');
const todoMainList = document.getElementById('main');
const closeButton = document.getElementById('close');
const containerToDo = document.getElementById('todo-box');


containerToDo.style.display = 'flex';
containerToDo.style.flexDirection = 'column';

const localSavedTodo = localStorage.getItem('todoList');
const parseOfTodoList= JSON.parse(localSavedTodo) || [];
let saveAllTodo = [...parseOfTodoList];


const createNewTodo = (titleTodo , descTodo , idTodo)=>{
 // here we will make 3 new html tags for every time we click on the submite button
 const listItem = document.createElement('li');
 listItem.id = (idTodo);
 const heading = document.createElement('h1');
 const paraDesc = document.createElement('p');
 heading.setAttribute('id','titleHeading')
 paraDesc.setAttribute('id','descPara')

// we make 3 new button edit and delete and update
 const editButton = document.createElement('button');
 editButton.innerHTML = 'Edit'
 editButton.setAttribute('id' , 'edit-btn')
 const updateButton = document.createElement('button');
 updateButton.innerHTML = 'Update'    
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = 'Delete'

// now we will change innerHTML of h1 and p by the value of our object
heading.innerHTML = titleTodo;
paraDesc.innerHTML = descTodo;
 listItem.appendChild(heading);
 listItem.appendChild(paraDesc);
 listItem.appendChild(editButton);
 listItem.appendChild(updateButton);
 listItem.appendChild(deleteButton);



// after we made h1 and p tags to be child of li we should make li to be a child of ul
 todoMainList.appendChild(listItem);


}
saveAllTodo.forEach((todo)=>{
createNewTodo(todo.title , todo.desc , todo.id);
})
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
    };
    // this is to storage all todos everytime we make them into one object
        saveAllTodo.push(todoObject);
    // now we save this object of all todos into local storage
        localStorage.setItem('todoList',JSON.stringify(saveAllTodo));
    createNewTodo(todoObject.title , todoObject.desc , todoObject.id);


};



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
        todoLi.remove()
        console.log(todoLi.id)
        const filteredTodo = saveAllTodo.filter(
            (item) => item.id !== Number(todoLi.id) 
        );
        saveAllTodo=filteredTodo
        localStorage.setItem('todoList', JSON.stringify(saveAllTodo));

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