import { FC, FormEvent, MutableRefObject, useRef, useState } from "react";
import { auth, db } from '../firebase-settings'
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "@firebase/auth";
import { setDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


const RegisterForm: FC = () => {

  const [loader, showLoader] = useState(false);
  const registrationForm: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const navigate = useNavigate();

  const createAccount = async (e: FormEvent, form: HTMLFormElement) => {
    e.preventDefault();
    showLoader(true);
    try {
      const { fullName, email, password, passwordII, terms } = form;
      const payload = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        passwordII: passwordII.value,
        terms: terms.value
      }
      if (payload.password !== payload.passwordII) throw Error('Your password does not match!')
      const userCred = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      await sendEmailVerification(userCred.user)
      await updateProfile(userCred.user, {
        displayName: fullName
      })
      await setDoc(doc(db, "admins", userCred.user.uid), {
        type: 'ADMIN'
      })
      showLoader(false);
      localStorage.setItem('adminId', userCred.user.uid);
      navigate('/dashboard');
    } catch (error) {
      showLoader(false);
      console.log(error);
    }
  }

  return (
    <>
      {loader && (<Loader />)}
      <form ref={registrationForm} onSubmit={e => createAccount(e, registrationForm.current!)}>
        <div className="form-group">
          <label htmlFor="frist_name">Full Name</label>
          <input id="frist_name" type="text" className="form-control" name="fullName" autoFocus />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-control" name="email" />
          <div className="invalid-feedback">
          </div>
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="password" className="d-block">Password</label>
            <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator"
              name="password" />
            <div id="pwindicator" className="pwindicator">
              <div className="bar"></div>
              <div className="label"></div>
            </div>
          </div>
          <div className="form-group col-6">
            <label htmlFor="password2" className="d-block">Password Confirmation</label>
            <input id="password2" type="password" className="form-control" name="passwordII" />
          </div>
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" name="terms" className="custom-control-input" id="agree" />
            <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm;