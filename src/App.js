import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {

    state = {
        todos: [
            { id: 1, content: 'learn react and redux' },
            { id: 2, content: 'browse on available scholarships' }
        ]
    }

    //------------------------------------------------------------
    //more standard way of writing state
    //------------------------------------------------------------
    // state = {
    //     todos : {
    //         1 : {
    //             id: 1,
    //             content: 'learn react'
    //         },
    //         2 : {
    //             id: 2,
    //             content: 'Browse on available'
    //         },
    //     }
    // }
    //-------------------------------------------------------------
    //end
    //-------------------------------------------------------------

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos: todos
        })
    }

    addTodo = (todo) => {
        //clever generation of id, but not adviceable, cause two Math.random() can generate 2 identical numbers
        todo.id = Math.random();

        //create a new array (spreading the former array into the new one)
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }



    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo todo={this.addTodo} />
            </div>
        )
    }
}

export default App;
