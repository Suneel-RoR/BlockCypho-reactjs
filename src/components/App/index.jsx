import React, {Component} from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import firebase from 'firebase'
import Blockcy from 'blockcypher'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Login from '../Login'
import Menu from '../Menu'
import Wallets from '../Wallets'
import BlockchainMenu from '../BlockchainMenu'
import WalletAddresses from '../WalletAddresses'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      token: null
    }

    this.handleOnAuth = this
      .handleOnAuth
      .bind(this)
    this.handleOnLogout = this
      .handleOnLogout
      .bind(this)
  }

  handleOnAuth(event) {
    event.preventDefault()
    var token = event.target.token.value
    this.setState({token})
    console.log(`Logged in with token ${token}`)
  }

  handleOnLogout(event) {
    event.preventDefault()
    this.setState({user: null, token: null})
    console.log(`Logged out`)
  }

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div>
          <Header token={this.state.token} onLogout={this.handleOnLogout}/>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
              if (this.state.token) {
                return (<BlockchainMenu/>)
              } else {
                return (<Login onAuth={this.handleOnAuth}/>)
              }
            }}/>

            <Route
              exact
              path='/:coin/:chain/wallets'
              render={({params}) => {
               
              if (this.state.token) {
                return (
                  <div>
                    <Menu coin={'bcy'} chain={'test'}/>
                    <Wallets coin={'bcy'} chain={'test'} token={this.state.token}/>
                  </div>
                )
              } else {
                return (<Login onAuth={this.handleOnAuth}/>)
              }
            }}/>

            <Route
              exactly
              path='/:coin/:chain/wallets/:wallet/addrs'
              render={({params}) => {
              if (this.state.token) {
                return (
                  <div>
                    <Menu coin={'bcy'} chain={'test'} />
                    <WalletAddresses coin={'bcy'} chain={'test'} wallet={'Suneel'} token={this.state.token} />
                    {/* <WalletAddresses
                      coin={params.coin}
                      chain={params.chain}
                      wallet={params.wallet}
                      token={this.state.token}/> */}
                  </div>
                )
              } else {
                return (<Login onAuth={this.handleOnAuth}/>)
              }
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
