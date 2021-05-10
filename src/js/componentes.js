
import {  Todo } from '../classes';
import { todolist } from '../index';

const btnBorraCompletados = document.querySelector('.clear-completed');
const divtodoList = document.querySelector('.todo-list');
const txtinnput = document.querySelector('.new-todo');
const ulFiltros = document.querySelector('.filters');
const aFiltros = document.querySelectorAll('.filtro');

export const creartodoHtml=(todo) => {

    const htmlTodo =`
    <li class="${(todo.completado)?'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox"  ${ (todo.completado)? 'checked': ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');

div.innerHTML=htmlTodo;

divtodoList.append(div.firstElementChild);

return div.firstElementChild;



}

//Events

txtinnput.addEventListener('keyup',  (event)=>{

    
    if(event.keyCode === 13 &&  txtinnput.value != '' ){
        console.log(txtinnput.value);
        const nuevoTarea=new Todo(txtinnput.value);
        todolist.nuevoTodo(nuevoTarea);
        
        creartodoHtml(nuevoTarea);
        txtinnput.value='';

    }


});

divtodoList.addEventListener('click', (event) =>{

    const nombreElemento=event.target.localName;
    const todoElemento = event.target.parentElement.parentElement; //se obtiene el parent (li del objeto en el que se le da clic)
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){//click en el checkbox
        todolist.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    if(nombreElemento.includes('button')){//click en el checkbox
        todolist.eliminarTodo(todoId);
        divtodoList.removeChild(todoElemento);
    }
    
    //console.log(nombreElemento);
});


btnBorraCompletados.addEventListener('click' , (event) =>{
    
    todolist.eliminarCompletados();

    for(let i = divtodoList.children.length-1; i>=0; i--){
        const elemento= divtodoList.children[i];
        if(elemento.classList.contains('completed')){
            divtodoList.removeChild(elemento);
        }
    }
    
});

ulFiltros.addEventListener('click', (event) =>{

const filtro = event.target.text;
if(!filtro){ return }


for (const elem of aFiltros){
    elem.classList.remove('selected');
}

event.target.classList.add('selected')

for (const elemento of divtodoList.children){
    elemento.classList.remove('hidden');
    const completado= elemento.classList.contains('completed');

    switch(filtro){
        case 'Pendientes': 
        if(completado){
            elemento.classList.add('hidden');
        }
        break;
        case 'Completados': 
        if(!completado){
            elemento.classList.add('hidden');
        }
    }
        
}


});



