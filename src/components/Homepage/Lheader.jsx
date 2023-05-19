import React from "react";
import { useState } from "react";

export const Heading = (props) => {

  const toogleButton = () => {
    if (email === "") {
      return alert("Please Enter Email");
    }
    setResgister(true);
  }
  const [email, setEmail] = useState("");
  const [isResgister, setResgister] = useState(false);

  return (
    <div>
      <h1>An inspiring design delivered to your inbox every morning</h1>
      <p id="first">
        Our team scouts the internet for the best designs, illustrations and art
        and delivers a truly inspiring one every day to your inbox
      </p>
      {isResgister ? (
        <h2>Thanks You</h2>
      ) : (
        <>
          {" "}
          <h4>Show me how it looks</h4>
          <div class="fromStyle">
            <form action="#" method="none">
              <input
                type="text"
                name="email"
                id=""
                placeholder="Your e-mail address"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button value="submit" name="Register Now" onClick={toogleButton}>
                Register Now
              </button>
            </form>
          </div>
        </>
      )}

      <p class="second">Free - No Spam - No Data Sharing</p>
    </div>
  );
};
