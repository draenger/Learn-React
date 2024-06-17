import { useContext } from "react";
import { CartContext } from "../store/food-cart-context";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty } from "../util/validation";
import { sendOrder } from "../http.js";

export default function Checkout({ onClose, onSubmitOrder }) {
  const { items, calculateTotalAmount } = useContext(CartContext);
  const totalAmount = calculateTotalAmount();

  const {
    value: nameValue,
    hasError: nameHasError,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
  } = useInput("", isNotEmpty);

  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", isEmail);

  const {
    value: streetValue,
    hasError: streetHasError,
    handleInputChange: handleStreetChange,
    handleInputBlur: handleStreetBlur,
  } = useInput("", isNotEmpty);

  const {
    value: postalValue,
    hasError: postalHasError,
    handleInputChange: handlePostalChange,
    handleInputBlur: handlePostalBlur,
  } = useInput("", isNotEmpty);

  const {
    value: cityValue,
    hasError: cityHasError,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
  } = useInput("", isNotEmpty);

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      nameHasError ||
      emailHasError ||
      streetHasError ||
      postalHasError ||
      cityHasError
    ) {
      return;
    }

    const request = {
      order: {
        items,
        customer: {
          name: nameValue,
          email: emailValue,
          street: streetValue,
          postalCode: postalValue,
          city: cityValue,
        },
      },
    };

    console.log(request);
    await sendOrder(request);
    onSubmitOrder();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount}</p>
      <Input
        id="name"
        label="Full Name"
        type="text"
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameHasError && "Please enter a valid name."}
      />
      <Input
        id="email"
        label="E-Mail Addres"
        type="email"
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        hasError={emailHasError}
        error={emailHasError && "Please enter a valid email."}
      />
      <Input
        id="street"
        label="Street"
        type="text"
        value={streetValue}
        onChange={handleStreetChange}
        onBlur={handleStreetBlur}
        error={streetHasError && "Please enter a valid street."}
      />
      <div className="control-row">
        <Input
          id="postal"
          label="Postal Code"
          type="text"
          value={postalValue}
          onChange={handlePostalChange}
          onBlur={handlePostalBlur}
          error={postalHasError && "Please enter a valid postal code."}
        />
        <Input
          id="city"
          label="City"
          type="text"
          value={cityValue}
          onChange={handleCityChange}
          onBlur={handleCityBlur}
          error={cityHasError && "Please enter a valid city."}
        />
      </div>
      <div className="modal-actions">
        <button type="button" onClick={onClose} className="text-button">
          Close
        </button>
        <button type="submit" className="button">
          Submit Order
        </button>
      </div>
    </form>
  );
}
