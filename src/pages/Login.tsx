import { FC } from "react"
import LoginForm from "../Components/Login-Form"

const Login: FC = () => {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body my-4">
                  <LoginForm />
                </div>
              </div>
              <div className="mt-5 text-muted text-center">
                Don't have an account? <a href="auth-register.html">Create One</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login