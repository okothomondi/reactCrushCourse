import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div>
        this will be my login page
        <Link to="/register">
          <Button color="primary" className="mt-3" active tabIndex={-1}>
            Register Now!
          </Button>
        </Link>
      </div>
    );
  }
}

export default Login;
