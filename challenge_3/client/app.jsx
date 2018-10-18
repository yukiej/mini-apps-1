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
    // this.setState({step: 1});
    console.log('The current step is');
    // event.preventDefault();
  }

  render() {
    if (this.state.step === 0) {
      return <Homepage func={this.handleCheckout}/>;
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
    console.log(this.props);
    return (
      <div>
          <button onClick={()=>{console.log('click registered')}}>Go to checkout</button>
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
            <button onClick={()=>{console.log('Done with account info!')}}>Next: Shipping information</button>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
);
