// Import React and necessary hooks
import './payment.css'; // Ensure this path is correct
import payment_image from "./ui_card.jpeg"

const payment = () => {
  // State for form fields
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect or handle form data here
    alert("Payement Successfull");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>

            <div className="inputBox">
              <span>Full Name :</span>
              <input type="text" name="fullName" placeholder="Enter your name"  required />
            </div>
            <div className="inputBox">
              <span>Email :</span>
              <input type="email" name="email" placeholder="abc123@mail.com"  required />
            </div>
            <div className="inputBox">
              <span>Address :</span>
              <input type="text" name="address" required />
            </div>
            <div className="inputBox">
              <span>City :</span>
              <input type="text" name="city"  required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>State :</span>
                <input type="text" name="state" placeholder="Kerala" required />
              </div>
              <div className="inputBox">
                <span>Zip Code :</span>
                <input type="text" name="zipCode" placeholder="000000" required />
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">Payment</h3>

            <div className="inputBox">
              <span>Cards Accepted :</span>
              <img src={payment_image}alt="" />
            </div>
            <div className="inputBox">
              <span>Name on Card :</span>
              <input type="text" name="cardName" placeholder="Name"  required />
            </div>
            <div className="inputBox">
              <span>Credit Card Number :</span>
              <input type="number" name="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" required />
            </div>
            <div className="inputBox">
              <span>Exp Month :</span>
              <input type="number" name="expMonth" placeholder="01" required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>Exp Year :</span>
                <input type="text" name="expYear" placeholder="20XX"  required />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" name="cvv" placeholder="XXX" required />
              </div>
            </div>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Proceed To Checkout
        </button>
      </form>
    </div>
  );
};

export default payment;
