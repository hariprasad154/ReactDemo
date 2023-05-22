import logo from './logo.svg';
import React from 'react';
import './App.css';
class App extends React.Component{
  url='https://www.reactjs.com/'
  constructor(){
  super()
  this.state={
    title:'hello from bridgelabs ',
    userName:'',
    nameError:' '
  }
}
onClick=($event)=>{
  console.log("save botton ",$event)
  window.open(this.url,"_blank");
}
onNameChange=(event)=>{
  console.log(" the name ",event.target.value);
  const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');

  if(nameRegex.test(event.target.value)){
    this.setState({userName: event.target.value});
    this.setState({nameError:''})
  }else{
    this.setState({nameError:'Name is not correct Starts With Capital and min 3 char'})
  }
}
render(){
  return(<div>
    <div>
      <h1>{this.state.title} {this.state.userName}</h1>
      <img src={logo} onClick={this.onClick}
      alt="The bridgeLab logo :a bridge to Employee"/>

    </div>
    <div>
      <input className="nameInput" onChange={this.onNameChange}/>
      <span className="error-output">{this.state.nameError}</span>
    </div>
    </div>
  )
}
}

export default App;
