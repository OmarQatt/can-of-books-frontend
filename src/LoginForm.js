import React from "react"
import Login from './Auth/Login'
export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Log In</label>
          </div>
          <div className="form-group mt-3">
            <label>Click Below to Log In</label>
          </div>
          <div className="d-grid gap-2 mt-3 " >
            <Login/>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}