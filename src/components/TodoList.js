import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Hello from todoList </h1>
        <h2><Item/></h2>
      </div>
    );
  }
}
