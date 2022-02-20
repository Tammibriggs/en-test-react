import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [formData, setFromData] = useState({});

  const handleChange = (evt) => {
    setFromData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="auth-page">
      <form className="form-auth" onSubmit={handleSubmit}>
        <h1 className="form-auth__header">Sign in</h1>
        {/*
          Needs correcting: For input fields intended for email use the appropriate type: type = "email".
          This will cause the browser to run an automatic validation to check if the entered text is in the correct form of an e-mail address.
          You can read about that here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email 
        */}
        <input
          name="email"
          type="text"
          className="form-auth_input"
          placeholder="Enter email"
          onChange={handleChange}
        />
        {/*
          Needs correcting: For input fields intended for password use the appropriate type: type = "password".
          This allows users to securely enter their password by keeping the text obscured so that it cannot be read by prying eyes.
          You can read about that here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password.

          After changing the input type to password, a functionality for toggling the display of plain-text on and off should be added
          to help users check that they entered the intended password. This can be accomplished by adding a button which when clicked,
          toggles the input type between text and password. 
          Here is a link to an article to help you out: https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs 
          You can read about other types of input here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input 
        */}
        <input
          name="password"
          type="text"
          className="form-auth_input"
          placeholder="Enter password"
          onChange={handleChange}
          minlength={6}
          maxlength={20}
          required
        />
        <button type="submit" className="todolist-form_submit">
          Sign in
        </button>
        <p className="auth-page_link">
          Not a member yet?
          <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
