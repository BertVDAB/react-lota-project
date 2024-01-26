import React, { useState } from "react";
// import "./mcFormStyles.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

import sendingImg from "../img/mailchimp/loading.gif"
import succesImg from "../img/mailchimp/succes.gif"


const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("voornaam");
  const [lastName, setLastName] = useState("achternaam");

  const sendingMsg = "Something's cooking.."
  const succesMsg =
    "Bedankt. Lekkere, gezonde gerechten komen jouw richting uit!";

   const handleSubmit = (e) => {
    // preventDefault is used to prevent the form from refreshing the page
     e.preventDefault();
     email &&
       firstName &&
       lastName &&
       email.indexOf("@") > -1 &&
       onValidated({
         EMAIL: email,
        //  MERGE1: firstName,
        //  MERGE2: lastName
       });
   };

  return (
    <>
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
          {status === "success"
            ? "Ontvang gezonde tips en recepten in je mailbox"
            : "Ontvang gezonde tips en recepten in je mailbox"}
        </h3>

        {status !== "success" ? (
          <div className="mc__field-container">
            {/* <div className="" style={{ display: "none" }}>
              <InputField
                label="Voornaam"
                onChangeHandler={setFirstName}
                type="text"
                // value="TEST"
                placeholder="Voornaam"
                // isRequired
              />

              <InputField
                label="Familienaam"
                onChangeHandler={setLastName}
                type="text"
                // value="TEST"
                placeholder="Achternaam"
                // isRequired
              />
            </div> */}

            <InputField
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="vul je e-mailadres in"
              isRequired
            />

            <InputField
              label="Inschrijven"
              type="submit"
              formValues={[
                email,
                // ,
                //  firstName,
                //   lastName
              ]}
            />
          </div>
        ) : null}
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            <img src={sendingImg} alt="" />
            {sendingMsg}
          </div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        {status === "success" && (
          <div className="mc__alert mc__alert--success">
            {/* // dangerouslySetInnerHTML={{ __html: message }} */}
            <img src={succesImg} alt="" />
            <br />
            {succesMsg}
          </div>
        )}
      </form>
    </>
  );
};

const MailchimpFormContainer = (props) => {
  const hiddenNameValue = "50e4a72d82071c45e7acfeca4";
  const hiddenIdValue = "18305d9dc1";
  const postUrl = `https://hotmail.us8.list-manage.com/subscribe/post?u=${hiddenNameValue}&id=${hiddenIdValue}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
