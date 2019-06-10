import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

export default class FormContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      receiveComs: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCheckBoxClick() {
    this.setState(prevState => ({
      receiveComs: !prevState.receiveComs,
    }));
  }

  render() {
    return (
      <form>
        <p>*Required Fields</p>
        <Input
          label="Your First Name"
          type="text"
          name="firstName"
          required={true}
          value={this.state.firstName}
          handleValueChange={this.handleValueChange}
        />
        <Input
          label="Your Last Name"
          type="text"
          name="lastName"
          required={true}
          value={this.state.lastName}
          handleValueChange={this.handleValueChange}
        />
        <Input
          label="Your Email Address"
          type="email"
          name="email"
          required={true}
          value={this.state.email}
          handleValueChange={this.handleValueChange}
        />
        <Radio label="I'm interested in" required={true} />
        <Checkbox label="Yes, I would like to receive communications via e-mail from Athabasca" />
      </form>
    );
  }
}
