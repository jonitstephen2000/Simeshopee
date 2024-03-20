import React from 'react';

function CreditCardForm() {
  return (
    <section>
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Billing details</h5>
            </div>
            <div className="card-body">
              <form id='credit-card-form'>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form6Example1" className="form-control" />
                      <label className="form-label" htmlFor="form6Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form6Example2" className="form-control" />
                      <label className="form-label" htmlFor="form6Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form6Example3" className="form-control" />
                  <label className="form-label" htmlFor="form6Example3">Company name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form6Example4" className="form-control" />
                  <label className="form-label" htmlFor="form6Example4">Address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form6Example5" className="form-control" />
                  <label className="form-label" htmlFor="form6Example5">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" id="form6Example6" className="form-control" />
                  <label className="form-label" htmlFor="form6Example6">Phone</label>
                </div>

                <hr className="my-4" />

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkoutForm1" />
                  <label className="form-check-label" htmlFor="checkoutForm1">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="checkoutForm2" defaultChecked />
                  <label className="form-check-label" htmlFor="checkoutForm2">
                    Save this information for next time
                  </label>
                </div>

                <hr className="my-4" />

                <h5 className="mb-4">Payment</h5>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3" defaultChecked />
                  <label className="form-check-label" htmlFor="checkoutForm3">
                    Credit card
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" />
                  <label className="form-check-label" htmlFor="checkoutForm4">
                    Debit card
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" />
                  <label className="form-check-label" htmlFor="checkoutForm5">
                    Paypal
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="formNameOnCard" className="form-control" />
                      <label className="form-label" htmlFor="formNameOnCard">Name on card</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="formCardNumber" className="form-control" />
                      <label className="form-label" htmlFor="formCardNumber">Credit card number</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-3">
                    <div className="form-outline">
                      <input type="text" id="formExpiration" className="form-control" />
                      <label className="form-label" htmlFor="formExpiration">Expiry Date</label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-outline">
                      <input type="text" id="formCVV" className="form-control" />
                      <label className="form-label" htmlFor="formCVV">CVV</label>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>Rs.</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Grand</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including gst)</p>
                    </strong>
                  </div>
                  <span><strong>Rs.</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditCardForm;
