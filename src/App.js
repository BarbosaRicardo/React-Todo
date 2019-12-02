import React from 'react'  

//imported components from src/components
import TodoList from './components/TodoComponents/TodoList.js'  
import TodoForm from './components/TodoComponents/TodoForm.js'  


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  //and any change handlers you need to work with your state

  //step1: call the constructor and super() method to allow methods from React's Component 
  //constructor class to be passed down into App (the derived or 'child' class)
  constructor () {
    super()  
    
    /** 
     * state for Todo. Recall that 'this' must be called since one is working
     * with classes.
     * Neglect binding this to components in state since ES6 now allows arrow functions 
     * to implicitly bind `this` to class components
    */
    this.state = {
      todos: [
        {
          id: '',
          task: '',
          completed: false
        }
      ],
      todo: ''
    };
  }; //end of state constructor

  /**
   * implicitly bind `this` to `addTodo` with ES6 arrow function
   * passes event as the single argument (no parethesis needed with single args)
   */
  addTodo = event => {
    //prevents re-render of screen 
    event.preventDefault()  

    //accessor
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now() //ok to use on small apps. please do research for larger ones. unsure atm =/ 
    }
    //appending state using spread operator  
    this.setState({
      //applying spread operator to avoid mutability 
      todos: [...this.state.todos, newTodo],
      todo: ''
    })  
  }; //end of addTodo

  /**
   * onChangeHandler component 
   * allows the name of the input to be the value 
   */
  onChangeHandler = event => {
    this.setState( {[event.target.name]: event.target.value } )  
  }; //end of onChangeHandler

  /**
   * toggleHandler component
   * using if-logic to check if todo.id's match 
   * mutable variable: use `let` and `slice()` to remove an item 
   */
  toggleHandler = id => {
    //`let` used for mutability purposes
    let todos = this.state.todos.slice()  
    // eslint-disable-next-line array-callback-return
    todos = todos.map(todo => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed  
        return todo  
      }
      else
      {
        return todo  
      }
    })  
    this.setState( { todos })  
  }  //end of toggleHandler

  /**
   * clearTodo instance object
   */
  clearTodo = event => {
    event.preventDefault()  
    let todos= this.state.todos.filter(todo => !todo.completed)  
    this.setState( { todos })  
  }   //end of clearTodo

  /**
   * render() called 
   */
  render() {
    return (
      <div className="App">
        <TodoForm
          value={this.state.todo}
          onChangeHandler={this.onChangeHandler}
          addTodoHandler={this.addTodo}
          clearTodoHandler={this.clearTodo}

        />
        <TodoList 
          toggleHandler={this.toggleHandler}
          todos={this.state.todos}
        />
      </div>
    )  
  };// end of render()

}; //end of App

export default App  
