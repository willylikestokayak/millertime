import React, { Component } from 'react';

class JobDetail extends Component {
  constructor(props) {
    super(props)
    //sibling of jobList.js
    this.state = {
      value: "",
      name: "Reggie",
      userData: {
        title: "Junior Dev",
        companyName: "Google",
        skills: "HTML, CSS, JS, React, hipster vibes",
        rating: "Unicorn",
        statusString: "applied"
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProp) {
    {/* These props will be piped in on the rerendering of the parent component
      so they will be changing pretty constantly */}

      {/* this.setState = {title: newProp.title,
              companyName: newProp.companyName,
              skills: newProp.skills,
              rating: newProp.rating,
              statusString: newProp.statusString
      } */}
    console.log("receivingPROPS")
  }

  handleSubmit(e) {
    console.log("a submit was made")
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h1>Job detail page</h1>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text" placeholder={this.state.userData.title} />
          <br/>

          Company Name:
          <input type="text" placeholder={this.state.userData.companyName} />
          <br />

          Skills:
          <input type="text" size="40" placeholder={this.state.userData.skills} />
          <br />

          Rating:
          <input type="text" placeholder={this.state.userData.rating} />
          <br />

          Status Streeng:
          <input type="text" placeholder={this.state.userData.statusString} />
          <br />

          {/*}
          Status array dropdownMenu:
          <br />
          contactPerson: <br />
          contactEmail: <br />
          thankYouSent: <br />
          firstFollowUp: <br />
          secondFollowUp: <br />
          thirdFollowUp: <br />
          */}

          Info:
          <input type="text" placeholder="info here" />
          <br />

          <input type="submit" value="submit edits" />
        </form>
      </div>
    )
  }
}

export default JobDetail;
