import React, { Component } from "react";

import Contact from "./Contact";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getContactsAction } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContactsAction();
  }

  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-info">Portfolio</span> Leo Lanese
        </h1>

        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContactsAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContactsAction })(Contacts);
