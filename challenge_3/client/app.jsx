var fieldValues = {
  name: 'name',
  email: 'email address', 
  password: 'password',
  add_line1: 'first line of address',
  add_line2: 'second line of address',
  city: 'Madison',
  state: 'Wisconsin',
  shipping_zipcode: 12345,
  phone_num: '123-4567',
  cc_num: 123456789123,
  expir_date: '10/18',
  cvv: 123,
  billing_zipcode: 12345 
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 0}
  }

  handleCheckout(event) {
    this.setState({step: this.state.step + 1}, function(){console.log("State after setState is ", this.state.step)});
    event.preventDefault();
    // console.log('State is ', this.state.step);
  }

  render() {
    if (this.state.step === 0) {
      return <Homepage func={this.handleCheckout.bind(this)}/>;
    } else if (this.state.step === 1) {
      return <AccountFields/>;
    }
    // } else if (this.state.step === 2) {
    //   return <ShippingFields/>;
    // } else if (this.state.step === 3) {
    //   return <BillingFields/>;
    // } else if (this.state.step === 4) {
    //   return <Confirmation/>;
    // }
  }
}

class Homepage extends React.Component {

  render() {
    return (
      <div>
          <button onClick={this.props.func}>Go to checkout</button>
      </div>
    )
  }
}

class AccountFields extends React.Component {

  render() {
    return (
      <div>
        <h2>Account information</h2>
          <div>
            <div>
              <label>Name</label>
              <input type="text" ref="name" />
            </div>

            <div>
              <label>Email</label>
              <input type="text" ref="email" />
            </div>

            <div>
              <label>Password</label>
              <input type="text" ref="password" />
            </div>

            <button onClick={(ev)=>{console.log(this.refs)}}>Next: Shipping information</button>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
);
