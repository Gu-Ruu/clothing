import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthuserWithEmailAndPassword,
} from "../../utility/Firebase/firebase.utils";
const defaultformFields = {
  email: "",
  Password: "",
};
import Button from "../button/Button.component";
import "./sign-in-form.styles.scss";
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, Password } = formFields;

  

  const resetFormfields = () => {
    setFormFields(defaultformFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthuserWithEmailAndPassword(
        email,
        Password
      );
      resetFormfields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/invalid-credential":
          alert("no  user associateed with this credential");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="off"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="Password"
          value={Password}
          autoComplete="off"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
