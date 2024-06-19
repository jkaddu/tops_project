import { useState } from "react";
import "./auth.css";

const Message = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <>
      {showAlert ? (
        <div className="backDrop">
          <div className="alertMsg">
            <p>{message}</p>
            <button onClick={() => setShowAlert(false)}>Exit</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Message;
