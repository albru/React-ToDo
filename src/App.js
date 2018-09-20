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


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       ninjas: [

//       ]
//     }
//     this.addNinja = this.addNinja.bind(this);
//     this.deleteNinja = this.deleteNinja.bind(this);
//   }
//   addNinja(ninja) {
//     ninja.id = Math.random();
//     let ninjas = [...this.state.ninjas, ninja]
//     this.setState({
//       ninjas: ninjas
//     })
//   }
//   deleteNinja(id) {
//     let ninjas = this.state.ninjas.filter(ninja => {
//       return ninja.id !== id
//     })
//     this.setState({
//       ninjas: ninjas
//     })
//   }
//   componentDidMount() {
//     console.log('component mounted')
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('components updated');
//     console.log(prevProps, prevState)
//   }
//   render() {
//     return (
//       <div>
//         <h1>My first react app!</h1>
//         <p>Welcome!:)</p>
//         <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
//         <AddNinja addNinja={this.addNinja} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// export default App