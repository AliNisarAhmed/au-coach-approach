import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Button from "./Button";

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
      <form className="formContent">
        <p className="formContent__required">
          <span className="star">*</span> Required Fields
        </p>
        <Input
          label="Your First Name"
          type="text"
          name="firstName"
          required={true}
          value={this.state.firstName}
          handleValueChange={this.handleValueChange}
          className="formContent__firstName"
        />
        <Input
          label="Your Last Name"
          type="text"
          name="lastName"
          required={true}
          value={this.state.lastName}
          handleValueChange={this.handleValueChange}
          className="formContent__lastName"
        />
        <Input
          label="Your Email Address"
          type="email"
          name="email"
          required={true}
          value={this.state.email}
          handleValueChange={this.handleValueChange}
          className="formContent__email"
        />
        <Radio
          label="I'm interested in"
          required={true}
          className="formContent__radio"
        />
        <Checkbox
          className="formContent__checkbox"
          receieveComs={this.state.receiveComs}
          label="Yes, I would like to receive communications via e-mail from Athabasca"
        />
        <Button size="large" className="formContent__submit" />
      </form>
    );
  }
}
