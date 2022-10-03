import { FC } from "react";
import RegisterForm from "../Components/Register-Form";

const Register = () => {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
                  <RegisterForm />
                </div>
                <div className="mb-4 text-muted text-center">
                  Already Registered? <a href="auth-login.html">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register;