import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserwithEmailAndpassword,
  createUserDocumentFromAuth,
} from "../../utility/Firebase/firebase.utils";
imp
const defaultformFields = {
  displayName: "",
  email: "",
  Password: "",
  confirmPassword: "",
};
import Button from "../button/Button.component";
import { UserContext } from "../../Contexts/user.context";
import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, Password, confirmPassword } = formFields;

  const { setCurrentuser } = useContext(UserContext);
  //console.log('hit');

  const resetFormfields = () => {
    setFormFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserwithEmailAndpassword(
        email,
        Password
      );
      setCurrentuser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormfields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.error("user creation encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          autocomplete="off"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autocomplete="off"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="Password"
          value={Password}
          autocomplete="off"
        />

        <FormInput
          label="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          autocomplete="off"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
