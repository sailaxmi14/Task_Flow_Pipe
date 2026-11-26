
import { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiApp, setUpiApp] = useState("");

  return (
    <div>
      <label>Payment Method</label>

      <select
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod(e.target.value);
          setUpiApp("");
        }}
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="UPI">UPI</option>
      </select>

      {paymentMethod === "UPI" && (
        <>
          <label>Select UPI App</label>

          <select
            value={upiApp}
            onChange={(e) => setUpiApp(e.target.value)}
          >
            <option value="">Select UPI App</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Google Pay">Google Pay</option>
          </select>
        </>
      )}

      <p>Payment Method: {paymentMethod}</p>
      <p>UPI App: {upiApp}</p>
    </div>
  );
}

export default Payment;
