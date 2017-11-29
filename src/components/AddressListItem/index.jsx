import React, { Component } from "react";
import RemoveAddressFromWallet from "../RemoveAddressFromWallet";
import PropTypes from "prop-types";

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onRemoveAddressFromWallet: PropTypes.func.isRequired
};

class AddressListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.address}</td>
        <td>
          <RemoveAddressFromWallet
            coin={this.props.coin}
            chain={this.props.chain}
            wallet={this.props.wallet}
            address={this.props.address}
            onRemoveAddressFromWallet={this.props.onRemoveAddressFromWallet}
          />
        </td>
      </tr>
    );
  }
}

AddressListItem.propTypes = propTypes;

export default AddressListItem;
