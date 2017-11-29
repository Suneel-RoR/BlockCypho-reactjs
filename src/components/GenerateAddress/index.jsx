import React, { Component } from "react";
import styles from "./generate-address.css";
import PropTypes from "prop-types";

const propTypes = {
  onGenerateAddressInWallet: PropTypes.func.isRequired
};

class GenerateAddress extends Component {
  render() {
    return (
      <div className={styles.root}>
        <form
          className={styles.form}
          method="post"
          onSubmit={this.props.onGenerateAddressInWallet}
        >
          <div className={styles.buttons}>
            <button className={styles.generate} type="submit">
              Generate New Address
            </button>
          </div>
        </form>
      </div>
    );
  }
}

GenerateAddress.propTypes = propTypes;

export default GenerateAddress;
