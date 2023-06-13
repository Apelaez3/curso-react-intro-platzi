import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos =[
  {text : "llorar con la llorona", completed: true},
  {text : "cortar cebolla", completed: true},
  {text : "caminar en la manana", completed: true},
  {text : "hacer aseo", completed: false},

]
function App() {
  return (
    <div className="App">


      <TodoCounter  completed={15} total={20}/>

      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
        
      </TodoList>

    <CreateTodoButton/>
      
    </div>
  );
}




export default App;
