export class TodoList{


    constructor(){
        //this.todo=[];
        this.cargaLocalstorage();
    }

    nuevoTodo(todo){
        this.todo.push(todo);
        this.guardarLocalStorage();
    }
    
    eliminarTodo(id){
        
       this.todo = this.todo.filter(todo => todo.id != id );
       this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todo){
            if(todo.id == id){
               todo.completado = !todo.completado;
               this. guardarLocalStorage();
               break;
            }
        }
    }

    eliminarCompletados(){

        
        this.todo = this.todo.filter(todo => todo.completado == true );
        this. guardarLocalStorage();
        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todo));

    }

    cargaLocalstorage(){

      this.todo =  (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []; 
        
    }
}