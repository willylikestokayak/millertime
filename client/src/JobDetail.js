import React, { Component } from 'react';

class JobDetail extends Component {
  constructor(props) {
    super(props)
    {/* where are the initial states coming from?? */}
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

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    {/* make the db call to update everything when the button is pressed  */}
    var data: {
      title: this.state.userData.title,
      companyName: this.state.userData.companyName,
      skills: this.state.userData.skills,
      rating: this.state.userData.rating,
      statusString: this.state.userData.statusString
    }

    $.ajax({
      type: "POST",
      url: "/",
      data: data
    })
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h1>Job detail page</h1>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text"
          placeholder={this.state.userData.title}
          value={this.state.userData.title}
          onChange={this.handleChange}
          />
          <br/>

          Company Name:
          <input type="text"
          placeholder={this.state.userData.companyName}
          value={this.state.userData.companyName}
          onChange={this.handleChange}
          />
          <br />

          Skills:
          <input type="text"
          size="40"
          placeholder={this.state.userData.skills}
          value={this.state.userData.skills}
          onChange={this.handleChange}
          />
          <br />

          Rating:
          <input type="text"
          placeholder={this.state.userData.rating}
          value={this.state.userData.rating}
          onChange={this.handleChange}
          />
          <br />

          Status Streeng:
          <input type="text"
          placeholder={this.state.userData.statusString}
          value={this.state.userData.statusString}
          onChange={this.handleChange}
          />
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
