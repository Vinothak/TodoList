import React from 'react';
import './App.css';
import CardComponent from './components/CardComponent'
import './index.css'


class App extends React.Component {

  constructor(props){
    super(props);
  }
 
 render(){
  return (

    <div className="App">
       <h1>Todo List</h1>
       <CardComponent className="shade"></CardComponent>
    </div>
  );
 }
}


export default App;
