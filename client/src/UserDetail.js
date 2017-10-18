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
    this.updateUserDetails = this.updateUserDetails.bind(this);
    // console.log("aljfa;ljfa;lgjas; should say beavis .... " + this.state.user.name);
  }

  handleBrandingStatement(e){
   this.state.brandingStatementToUpdate = e.target.value;
  //  console.log("....................................." + this.state.user.email);
  }

  updateUserDetails(e){
    console.log("lkdslfja;ldkfjas;ldkfj" + this.state);
    e.preventDefault()
    var temp;
    temp = this.state.user;
    console.log("this is the temp var" + temp);
    temp.brandingStatement = this.state.brandingStatementToUpdate;
    this.setState({
    user: temp
  });
  // handleUnicorn(e){

  // }
  // this.brandingStatementToUpdate = this.brandingStatementToUpdate.bind(this);
}

  render() {
    console.log(this.state.user, "more things to be here");
    return (
        <div>
            <h1>Keep BethBot happy: evolve your brand and vision</h1>
            <form onSubmit = {this.updateUserDetails}>
              Update Your Branding Statement:
                <input type="text" placeholder={this.state.user.brandingStatement} onChange={(e)=> this.handleBrandingStatement(e)} />
                {/* <input type="text" placeholder='what makes your unicorn'/>     */}
                {/* <button onClick={(e) => this.brandingStatementToUpdate(e)}>Save</button> */}
                <input type="submit" value="submit edits" />
            </form>
        </div>
    )
  }
  }

export default UserDetail;
