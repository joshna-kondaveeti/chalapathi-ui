/*
import logo from './download.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
 import React, {Component} from 'react';
 class App extends React.Component{
  render(){
    return(
      <div>
        <First/>
        <Second/>
      </div>
    );
  }
}
 class First extends React.Component{
  render(){
    return(
    <div>
      <h1>Chalapathi</h1>
    </div>
    );
  }
}
 class Second extends React.Component{
  render(){
    return(
    <div>
      <h2>www.Chalapathi.com</h2>
      <p>This website contains the details of this college</p>
    </div>
    );
  }
}
export default App;
*/
/*
 import React, {Mango} from 'react';
 import logo  from 'download.jfif';
 import audio from ' ';
 import vedio from 'cartoon-landscape-with-hills-and-forest-video.mp4';
  class Fruits extends React.Component{
  render(){
    return(
      <div>
        <Mango1/>
        <Apple/>
        <Banana/>
        <Grape/>
      </div>
    );
  }
}
class Mango1 extends React.Component{
  render(){
    return(
    <div>
      <img src={logo} className="download.jfif" alt="teddy" />
    </div>
    );
  }
}
 class Apple extends React.Component{
  render(){
    return(
    <div>
      <audio src={audio} className="(3) WhatsApp.html" alt="audio"controls/>
    </div>
    );
  }
}
class Banana extends React.Component{
  render(){
    return(
    <div>
      <vedio src={vedio} className="cartoon-landscape-with-hills-and-forest-video.mp4" alt="vedio"controls/>
    </div>
    );
  }
}
class Grape extends React.Component{
  render(){
    return(
    <div>
      Enter email:
      <input type="email" name="email"required/>
      Enter password:
      <input type="password" name="pwd"required/> 
    </div>
    );
  }
}
export default Fruits; */

/*
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <p><h4>Take care your health</h4></p>  
                              <button onClick={this.togglemyBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;   */

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Mangos are imported from { this.props.name } </h1>    
            <p> <h4> Welcome to Mango city </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  */



/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city are guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem"  
}  
export default App; */


/*
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div> 
                           
                            <pre>Email:<input type="email" name="email"  required/></pre> <br/> 
                             <pre>Password:<input type="password" name="pwd"   required/></pre> <br/>
                            <button>Login</button>  <br/> 
                            <button onClick={this.togglemyBio}> Show Less </button> 
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                                  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;   */

/*
import Joshna from 'react';
class App extends Joshna.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
export default App;   
*/


/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {age: '150'};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({age: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfullys: ' + this.state.age);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.age} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App; */

import Form from 'react-bootstrap/Form';
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo:"Login" };  
      //console.log('Component this', this);  
      render() {  
          return (  
              <div>  
                  <h1>Login form</h1>  
                          <div> 
                           <pre>Email:<input type="email" name="email"  required/></pre> <br/> 
                            pre>Password:<input type="password" name="pwd"   required/></pre> <br/>
                            <button>Login</button>  <br/>
                          </div> 
                  </div>  
        )  
    }  
}  
export default App;   
