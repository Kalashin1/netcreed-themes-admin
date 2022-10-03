import { FC } from "react"

const LoginForm: FC = () => {
  return (
    <form method="POST" action="#" className="needs-validation" noValidate>
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
  )
}

export default LoginForm;