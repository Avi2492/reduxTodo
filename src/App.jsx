import AddTodo from "./components/AddTodo";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  return (
    <>
      <h1 className="text-center bg-blue-400 m-5 p-5 rounded-lg font-semibold">
        ReduxToolKit Todo App
      </h1>
      <AddTodo />
      <SimpleTodo />
    </>
  );
}

export default App;
