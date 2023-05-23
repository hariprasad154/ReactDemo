import '../Styles/home.css';
import logo from '../Styles/bridgelabslogo.png';
import React ,{Component} from "react";

class Home extends Component{
  url='https://www.reactjs.com/'
  constructor(){
  super()
  this.state={
    title:'Hello',
    company:'From Bridgelabz ',
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
  return(
  <div className='outerpage'>
  <div class="innerpage">
  <div>
    <h1 className='h1'> {this.state.title} {this.state.userName} {this.state.company}</h1>
    <img src={logo} onClick={this.onClick}
    alt="The bridgeLab logo :a bridge to Employee"/>
  </div>
  <div>
    <input tyoe="text" name="Name"className="nameInput" placeholder="Enter u r Name" onChange={this.onNameChange}/>
    <span className="error-output">{this.state.nameError}</span>
  </div>
  <div>
  <body id='body'>
      <p>Hello from bridge labs  </p>
      <ul>
        <li>Technologyes</li>
        <li>thinkers</li>
        <li>builders</li>
      </ul>
      <p>Working together to keep thr Tech Employability of Engineers alive and </p>
      <p>accessible,so Tech Companies worldwide can get contributors and </p>
      <p>creators for Technology Solutions.We believe this act of human</p>
      <p>collaboration across an employability platform is essential to individual</p>
      <p>growth and our collection future.</p>
      <p>To Know abput us,visit <a href="https://www.bridgelabz.com/"> bridgeLab</a> to learn even more about our mission
              i.e <b>Employability</b> to all. </p>
  </body>
  </div>
  </div>
  </div>
  )
  }
}
export default Home;

