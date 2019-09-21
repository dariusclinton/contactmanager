import React, { Component } from "react";
import { Consumer } from "../../context";

class ShowContact extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const [contact] = value.contacts.filter(
            contact => contact.id === parseInt(this.props.match.params.id)
          );

          return (
            <div>
              {contact ? (
                <div>
                  <h3 className="display-4">{contact.name}</h3>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                </div>
              ) : (
                <h4 className=" text-center display-4">Contact not found</h4>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ShowContact;
