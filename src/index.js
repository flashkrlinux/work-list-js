import './styles.css';
import {Todo, TodoList} from './classes';
import { creartodoHtml } from './js/componentes';


export const todolist = new TodoList();



console.log(todolist.todo.length);

for(const i in todolist.todo){
    
    creartodoHtml(todolist.todo[i]);
}
//creartodoHtml(todolist.todo[0]);

/*const tarea = new Todo(' carlos aprende JS');


todolist.nuevoTodo(tarea)


console.log(todolist);
creartodoHtml(tarea);*/