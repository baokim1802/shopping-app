import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import validate from "../../core/utils/validate";
import { actionFetchLogin } from "../../store/auth";
import { ACCOUNT_PATH } from "../../core/constants/path";

export default function Login() {
  const dispatch = useDispatch();

  // const [form, setForm] = useState({});
  // const [errors, setErrors] = useState({});

  // const form = Form.useForm();

  // useEffect(() => {
  //   setTimeout(() => {
  //     form.setValues({
  //       email: "kim@g.com",
  //       password: "123",
  //     });
  //   }, 1000);
  // }, []);

  const { isFetchLogin } = useSelector((store) => store.auth);
  const { user } = useSelector((store) => store.user);

  const onSubmit = (form) => {
    console.log("Form", form);

    dispatch(actionFetchLogin(form));

    // ev.preventDefault();
    // const errorObj = validate(form, {
    //   email: [
    //     { required: true, message: "* Email is required" },
    //     { pattern: "email" },
    //   ],
    //   password: [
    //     { required: true },
    //     {
    //       pattern: "password",
    //       message:
    //         "* Password requires minimum 5 characters, at least one letter and one number",
    //     },
    //   ],
    // });
    // console.log("ERROR:", errorObj);
    // setErrors(errorObj);
    // if (Object.keys(errorObj).length === 0) {
    //   // dispatch(authLogin(form));
    // }
  };

  if (user) {
    return <Navigate to={ACCOUNT_PATH} />;
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Returning Customer</h6>
          {/* Form */}
          <Form className="form" onFinish={onSubmit}>
            <div className="row">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "* Email is required" },
                  { pattern: "email" },
                ]}
              >
                <Input id="loginEmail" placeholder="Email Address *" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true },
                  // {
                  //   pattern: "password",
                  //   message:
                  //     "* Password requires minimum 5 characters, at least one letter and one number",
                  // },
                ]}
              >
                <Input
                  id="loginPassword"
                  type="password"
                  placeholder="Password *"
                />
              </Form.Item>
              <div className="col-12 col-md">
                {/* Remember */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="loginRemember"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="loginRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group">
                  <a
                    className="font-size-sm text-reset"
                    data-toggle="modal"
                    href="#modalPasswordReset"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button className="btn btn-sm btn-dark" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
