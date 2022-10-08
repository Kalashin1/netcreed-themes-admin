import { FC, useRef, useState, MutableRefObject, FormEvent } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase-settings";
import { signInWithEmailAndPassword } from "@firebase/auth";
import Loader from "./Loader";

const LoginFormComponent: FC = () => {
  const navigate = useNavigate();
  const [loader, showLoader] = useState(false)
  const loginForm: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const login = async (e: FormEvent, form: HTMLFormElement) => {
    e.preventDefault()
    showLoader(true)
    try {
      const { email, password } = form;
      const payload = {
        email: email.value,
        password: password.value
      };
      const userCred = await signInWithEmailAndPassword(auth, payload.email, payload.password);
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
      <form method="POST" ref={loginForm} onSubmit={e => login(e, loginForm.current!)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-control" name="email" tabIndex={1} required autoFocus />
          <div className="invalid-feedback">
            Please fill in your email
          </div>
        </div>
        <div className="form-group">
          <div className="d-block">
            <label htmlFor="password" className="control-label">Password</label>
            <div className="float-right">
              <a href="auth-forgot-password.html" className="text-small">
                Forgot Password?
              </a>
            </div>
          </div>
          <input id="password" type="password" className="form-control" name="password" tabIndex={2} required />
          <div className="invalid-feedback">
            please fill in your password
          </div>
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
            <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginFormComponent;