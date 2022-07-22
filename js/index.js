
// event
// d// const heading=document.getElementsByTagName('h1')[0];
// // heading.addEventListener("click" , function(){
// //     alert('write what you want');
// // })


// or
// const heading=document.getElementsByTagName('h1')[0];

// function headingClickAction(){
//     alert('write what you want');
// }

// heading.addEventListener('click' , headingClickAction);

const todoTitle = document.getElementById('title');
const todoDesc = document.getElementById('desc');
const submitTodoButton = document.getElementById('submite');
const mainList = document.getElementById('main');

// handle add new todo

const handleCreateNewTodo = (event) => {
    event.preventDefault();
    console.log('hi');
// validate to do form
// if we use return in a function it will stop the script in the line which we have return
    if(!todoTitle.value) return console.warn('go and write a new todo by new title')
    
    const newTodo = {
        title: todoTitle.value,
        desc: todoDesc.value,
    };
// we are making tags here
    const listItem = document.createElement('li');
    const descTodoPar = document.createElement('p');
    const headingTodoTitle = document.createElement('h3');
// now we say the value of newTodo must be equal to our new tags p and h3 (which is our user input that we saved in newTodo function)
    descTodoPar.innerHTML = newTodo.desc;
    headingTodoTitle.innerHTML = newTodo.title;
// here we tell li to accept h1 and p as li childs
    listItem.appendChild(headingTodoTitle);
    listItem.appendChild(descTodoPar);
//delet edit update btn
    const actionsBtn=`
    <div>
        <button>DEL</button>
        <button>EDIT</button>  
        <button>UPDATE</button>      
    </div>`
    listItem.innerHTML += actionsBtn
// now we make li to be ul child so this li will add to our main ul html
    mainList.appendChild(listItem);

//here we will give our new li a new style

    // listItem.className = 'list-item'
    // listItem.setAttribute('class' , 'list-item' );
    // headingTodoTitle.style.color = 'green'
    




    // const newTodoListItem = `
    // <li>
    // <h3>${newTodo.title}</h3>
    // <p>${newTodo.desc}</p>
    // </li>`;
    // mainList.innerHTML += newTodoListItem
    // console.log(newTodoListItem);
    // console.log(newTodo);
         console.log(listItem);

}; 
submitTodoButton.addEventListener('click' , handleCreateNewTodo);
// now I will make a button to close an alert
    const gone = document.getElementById('close');
    const sidebar = document.getElementById('sidebar-alert');
    
console.log('close');
    function closeAlert(){
        gone.setAttribute('class' , 'off');
        sidebar.setAttribute('class' , 'off');
    }
        
    
    gone.addEventListener('click' , closeAlert);
