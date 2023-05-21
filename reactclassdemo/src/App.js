import logo from './logo.svg';
import React from 'react';
import './App.css';
class App extends React.Component{
  url='https://www.reactjs.com/'
  constructor(){
  super()
  this.state={
    title:'hello from bridgelabs ',
    userName:''
  }
}
onClick=($event)=>{
  window.open(this.url,"_blank");
}
onNameChange=(event)=>{
  this.setState({userName: event.target.value});

}
render(){
  return(<>
    <div>
      <h1>{this.state.title} {this.state.userName}</h1>
      <img src={logo} onClick={this.onClick}
      alt="The bridgeLab logi :a bridge to Employee"/>

    </div>
    <div>
      <input onChange={this.onNameChange}/>
    </div>
    </>
  )
}
}

export default App;
