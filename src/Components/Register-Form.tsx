import { FC } from "react";

const RegisterForm: FC = () => {
  return (
    <form method="POST">
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="frist_name">First Name</label>
          <input id="frist_name" type="text" className="form-control" name="frist_name" autoFocus />
        </div>
        <div className="form-group col-6">
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" type="text" className="form-control" name="last_name" />
        </div>
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
          <input id="password2" type="password" className="form-control" name="password-confirm" />
        </div>
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
          <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Register
        </button>
      </div>
    </form>
  )
}

export default RegisterForm;