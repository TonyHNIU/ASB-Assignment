import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { useForm } from "react-hook-form";

type Profile = {
  cardnumber: number;
  cvc: number;
  expiry: string;
};

const App: React.FunctionComponent = () => {
  const [sidebar, setSidebar] = useState(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [showName, setShowName] = useState<string>();

  const showSidebar = () => setSidebar(!sidebar);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data): void => {
    setShowName(cardNumber);
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCardNumber(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <nav className="nav" onClick={showSidebar}>
          <div className="navIcon" onClick={showSidebar}>
            {sidebar === false ? <AiOutlineMenu /> : <AiOutlineArrowLeft />}
          </div>
        </nav>
      </div>
      {sidebar === false ? (
        <form onSubmit={onSubmit} className="App-content">
          <div>
            Welcome,&nbsp;
            {showName}
          </div>
          <div>
            <input
              {...register("cardnumber", {
                required: true,
                minLength: 16,
                maxLength: 16,
                pattern: {
                  value: /[0-9]{16}/,
                  message: "error message",
                },
              })}
              id="cardnumber"
              name="cardnumber"
              type="text"
              placeholder="Credit Card Number"
              className="input"
              onChange={handleChange}
            />
            {errors.cardnumber && (
              <p className="error-size">Required 16 Digits</p>
            )}
          </div>
          <div>
            <input
              {...register("cvc", {
                required: true,
                minLength: 3,
                maxLength: 3,
                pattern: {
                  value: /[0-9]{3}/,
                  message: "error message",
                },
              })}
              id="cvc"
              name="cvc"
              type="text"
              placeholder="CVC"
              className="input"
            />
            {errors.cvc && <p className="error-size">Required 3 Digits</p>}
          </div>
          <div>
            <input
              {...register("expiry", { required: true })}
              id="expiry"
              name="expiry"
              type="date"
              placeholder="Expiry Date"
              className="date"
            />
            {errors.expiry && <p className="error-size">Select Expiry Date</p>}
          </div>
          <div></div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="navContent">
          <div>Accounts and Cards</div>
          <div>Loans and Mortgages</div>
          <div>KiwiSaver and Investments</div>
          <div>Insurance</div>
          <div>International and Foreign Exchange</div>
          <div>Business and Rural</div>
        </div>
      )}
    </div>
  );
};

export default App;
