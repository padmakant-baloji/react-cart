import React, { Component } from "react";
import moment from "moment";
import Form from "../../components/caseone/Form";
import Table from "../../components/caseone/table/Table";
import { states } from "../../conf/initialStates";
import {
  shippingAddressFields,
  billingAddressFields,
  tableHeadings,
  emptyRow
} from "../../conf/fields";
import jsonData from "../../conf/form-data.json";

export default class Caseone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...states.caseone
    };
  }
  /*
   * handleShippingAddressChange
   * It will update shipping address form fields.
   */
  handleShippingAddressChange = evt => {
    const shippingAddress = {
      ...this.state.billishippingAddressngAddress,
      [evt.target.name]: evt.target.value
    };
    this.setState({
      shippingAddress
    });
  };
  /*
   * handleBillingAddressChange
   * It will update billing address form fields.
   */
  handleBillingAddressChange = evt => {
    const billingAddress = {
      ...this.state.billingAddress,
      [evt.target.name]: evt.target.value
    };
    this.setState({
      billingAddress
    });
  };

  /*
   * handleCartChange
   * It will handle data change in cart fields.
   */
  handleCartChange = (evt, id, changTotalAmount) => {
    const cartData = [...this.state.cartData];
    cartData[id][evt.target.name] = evt.target.value;

    if (changTotalAmount) {
      if (cartData[id].totalPrice && cartData[id].unitPrice) {
        cartData[id].totalPrice = (
          parseFloat(cartData[id].qty) * parseFloat(cartData[id].unitPrice)
        ).toString();
      }
    }
    this.setState({
      cartData
    });
  };

  /*
   * addProductToCart
   * It will insert new empty row to cart array.
   */
  addProductToCart = () => {
    const cartData = [...this.state.cartData];
    cartData.push({ ...emptyRow });
    this.setState({
      cartData
    });
  };

  /*
   * removeProductFromCart
   * It will remove row from the cart array.
   */
  removeProductFromCart = index => {
    const cartData = [...this.state.cartData];
    cartData.splice(index, 1);
    this.setState({
      cartData
    });
  };
  /*
   * saveCartData
   * It will log all the data to browsers console.
   */
  saveCartData = () => {
    console.info("Data is ::::::::: ", this.state);
  };
  /*
   * onDateChange
   * It will update the state for oredr date and expected delivery date.
   */
  onDateChange = e => {
    this.setState({
      [e.target.name]: moment(e.target.value)
        .format("YYYY-MM-DD")
        .toString()
    });
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      billingAddress: jsonData.billingAddress,
      shippingAddress: jsonData.shippingAddress,
      cartData: jsonData.cartData
    });
  }

  render() {
    const {
      billingAddress,
      shippingAddress,
      cartData,
      orderDate,
      expectedDelivery
    } = this.state;

    return (
      <div className="main-container">
        <div className="caseone-card">
          <div className="row">
            <div className="col col-md-4 col-lg-4">
              {/*
               * It will take fields from src/conf/fields
               * Add new field to billingAddress variable
               * eg. {name:"idForField", label:"labelForField"}
               */}
              <Form
                heading="Billing Address"
                formData={billingAddress}
                handleChange={this.handleBillingAddressChange}
                fields={billingAddressFields}
              />
              <div className="datePicker">
                <h5 className="form-heading">Oder Date</h5>
                <input
                  type="date"
                  name="orderDate"
                  id="orderDate"
                  value={orderDate}
                  onChange={e => this.onDateChange(e)}
                ></input>
              </div>
            </div>
            <div className="col col-md-4 col-lg-4">
              {/*
               * It will take fields from src/conf/fields
               * Add new field to shippingAddress variable
               * eg. {name:"idForField", label:"labelForField"}
               */}
              <Form
                heading="Shipping Address"
                formData={shippingAddress}
                handleChange={this.handleShippingAddressChange}
                fields={shippingAddressFields}
              />
              <div className="datePicker">
                <h5 className="form-heading">Expected Delivery</h5>
                <input
                  type="date"
                  name="expectedDelivery"
                  id="expectedDelivery"
                  value={expectedDelivery}
                  onChange={e => this.onDateChange(e)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="caseone-card">
          {/*
           * It will render Table
           * It  takes table headings  from src/conf/fields; var name 'tableHeadings'
           */}
          <Table
            headings={tableHeadings}
            rows={cartData}
            handleChange={this.handleCartChange}
            removeProduct={this.removeProductFromCart}
          />
          <div>
            <button className="caseone-add" onClick={this.addProductToCart}>
              ADD PRODUCT
            </button>

            <button className="caseone-save" onClick={this.saveCartData}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
