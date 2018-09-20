import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos/Todos"
import AddTodo from "./AddTodo/AddTodo"
import "./main.scss";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'play mario kart'}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo(todo) {
    todo.id = Math.random() * Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  deleteTodo(id) {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App


