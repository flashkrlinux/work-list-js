(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function f(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function g(d,a,b){return a&&f(d.prototype,a),b&&f(d,b),d}c.r(b);var h=c(0),j=function c(a){d(this,c),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=Date()},k=function(){function b(){e(this,b),this.cargaLocalstorage()}return g(b,[{key:'nuevoTodo',value:function(b){this.todo.push(b),this.guardarLocalStorage()}},{key:'eliminarTodo',value:function(c){this.todo=this.todo.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:'marcarCompletado',value:function(h){var i,a=!0,b=!1;try{for(var c,d,e=this.todo[Symbol.iterator]();!(a=(c=e.next()).done);a=!0)if(d=c.value,d.id==h){d.completado=!d.completado,this.guardarLocalStorage();break}}catch(c){b=!0,i=c}finally{try{a||null==e['return']||e['return']()}finally{if(b)throw i}}}},{key:'eliminarCompletados',value:function(){this.todo=this.todo.filter(function(b){return!0==b.completado}),this.guardarLocalStorage()}},{key:'guardarLocalStorage',value:function(){localStorage.setItem('todo',JSON.stringify(this.todo))}},{key:'cargaLocalstorage',value:function(){this.todo=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[]}}]),b}(),l=document.querySelector('.clear-completed'),p=document.querySelector('.todo-list'),m=document.querySelector('.new-todo'),n=document.querySelector('.filters'),o=document.querySelectorAll('.filtro'),q=function(d){var a='\n    <li class="'.concat(d.completado?'completed':'','" data-id="').concat(d.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox"  ').concat(d.completado?'checked':'','>\n            <label>').concat(d.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),b=document.createElement('div');return b.innerHTML=a,p.append(b.firstElementChild),b.firstElementChild};m.addEventListener('keyup',function(c){if(13===c.keyCode&&''!=m.value){console.log(m.value);var a=new j(m.value);r.nuevoTodo(a),q(a),m.value=''}}),p.addEventListener('click',function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute('data-id');a.includes('input')&&(r.marcarCompletado(c),b.classList.toggle('completed')),a.includes('button')&&(r.eliminarTodo(c),p.removeChild(b))}),l.addEventListener('click',function(){r.eliminarCompletados();for(var c,a=p.children.length-1;0<=a;a--)c=p.children[a],c.classList.contains('completed')&&p.removeChild(c)}),n.addEventListener('click',function(q){var a=q.target.text;if(a){var b,e=!0,c=!1;try{for(var d,f,g=o[Symbol.iterator]();!(e=(d=g.next()).done);e=!0)f=d.value,f.classList.remove('selected')}catch(d){c=!0,b=d}finally{try{e||null==g['return']||g['return']()}finally{if(c)throw b}}q.target.classList.add('selected');var h,k=!0,i=!1;try{for(var j,l,m=p.children[Symbol.iterator]();!(k=(j=m.next()).done);k=!0){l=j.value,l.classList.remove('hidden');var n=l.classList.contains('completed');'Pendientes'===a?n&&l.classList.add('hidden'):'Completados'===a?n||l.classList.add('hidden'):void 0}}catch(b){i=!0,h=b}finally{try{k||null==m['return']||m['return']()}finally{if(i)throw h}}}}),c.d(b,'todolist',function(){return r});var r=new k;for(var s in console.log(r.todo.length),r.todo)q(r.todo[s])}]);