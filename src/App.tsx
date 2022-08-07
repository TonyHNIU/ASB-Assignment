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

  const { handleSubmit } = useForm<Profile>();

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
      <form onSubmit={onSubmit}>
        <div>Welcome,&nbsp;</div>
        <div>
          <input
            id="cardnumber"
            name="cardnumber"
            type="text"
            placeholder="Credit Card Number"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="cvc"
            name="cvc"
            type="text"
            placeholder="CVC"
            className="input"
          />
        </div>
        <div>
          <input
            id="expiry"
            name="expiry"
            type="date"
            placeholder="Expiry Date"
            className="date"
          />
        </div>
        <div></div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
