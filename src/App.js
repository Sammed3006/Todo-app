import './App.css';
import AddTodoForm from './components/AddTodo';
import TodoList from './components/TodoList';
import TotalCompletedItems from './components/CompletedTodos';

function App() {
  return (
    <div className="App">
              <h1 className='heading'>TODO LIST</h1>
              <AddTodoForm/>
              <TodoList/>
              <TotalCompletedItems/>
            
    </div>
  );
}

export default App;
