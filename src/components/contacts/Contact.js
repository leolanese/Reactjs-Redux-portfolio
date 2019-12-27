import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContactAction } from "../../actions/contactActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCheck,
  faSortDown,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faAngular, faJs } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContactAction(id);
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <span>
          <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          <FontAwesomeIcon icon={faAngular} color="#b13138" />
          <FontAwesomeIcon icon={faJs} color="#f7df1e" />
          {contact.company}{" "}
          <FontAwesomeIcon
            icon={faSortDown}
            color="#000"
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            style={{
              cursor: "pointer",
              fontSize: "2em",
              top: "-5px",
              position: "relative"
            }}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={this.onDeleteClick.bind(this, contact.id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "#922626",
              marginRight: "1rem"
            }}
          />
          <Link to={`contact/edit/${contact.id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "blue",
                marginRight: "1rem"
              }}
            />
          </Link>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">{contact.role}</li>
              <li className="list-group-item">
                {contact.date}
                {contact.country}
              </li>
              <li className="list-group-item">{contact.description}</li>
            </ul>
          ) : null}
        </span>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContactAction: PropTypes.func.isRequired
};

export default connect(null, { deleteContactAction })(Contact);
