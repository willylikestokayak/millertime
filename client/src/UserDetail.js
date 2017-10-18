import React, { Component } from 'react';
import App from './App.js';



class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: {
        name: "Beavis",
        email: "thegreatcornholio@teepee.bm",
        brandingStatement: "Hey, Butt-head, this website kicks ass.",
        unicornJob: "Whoa, unicorns are cool.  Heh heh."
        },
        brandingStatementToUpdate: '',
        unicornToUpdate: ''

    },
    this.handleBrandingStatement = this.handleBrandingStatement.bind(this);
    
  }

  handleBrandingStatement(e){
   this.state.brandingStatementToUpdate = e.target.value; 
  }

  updateBranding(e){
    e.preventDefault()
    var temp;
    temp = this.state.user;
    temp.brandingStatement=brandingStatementToUpdate;

    this.setState({
    user: temp
  });
  // handleUnicorn(e){

  // }
  // this.brandingStatementToUpdate = this.brandingStatementToUpdate.bind(this);  
}

  render() {
    console.log(this.state);
    return (
        <div>
            <h1>{this.state.brandingStatement}</h1>
            <form>
                <input type="text" placeholder='edit brand statement' onChange={(e)=> this.handleBrandingStatement(e)} />
                {/* <input type="text" placeholder='what makes your unicorn'/>     */}
                <button onClick={(e) => this.brandingStatementToUpdate(e)}>Save</button>   
                
            </form>
        </div>
    )
  }
  }

export default UserDetail;
