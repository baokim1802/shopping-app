import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useToggle } from "../../core/hooks/useToggle";
import { actionFetchRegister } from "../../store/auth";

export default function Register() {
  const dispatch = useDispatch();

  const isFetchRegister = useToggle();
  const [registerError, setRegisterError] = useState("");

  const onSubmit = (form) => {
    console.log({ form });
    isFetchRegister.setTrue();
    dispatch(
      actionFetchRegister({
        data: form,
        success() {
          console.log("Registered successfully");
        },
        error(error) {
          setRegisterError(error);
        },
        end() {
          isFetchRegister.setFalse();
        },
      })
    );
  };

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">New Customer</h6>
          {registerError && <ErrorMessage>{registerError}</ErrorMessage>}
          {/* Form */}
          <Form className="form" onFinish={onSubmit}>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "* First name is required" }]}
            >
              <Input id="registerFirstName" placeholder="First Name *" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: "* Last name is required" }]}
            >
              <Input id="registerLastName" placeholder="Last Name *" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "* Email is required" },
                { pattern: "email" },
              ]}
            >
              <Input id="registerEmail" placeholder="Email Address *" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true },
                {
                  pattern: "password",
                  message:
                    "* Password requires minimum 5 characters, at least one letter and one number",
                },
              ]}
            >
              <Input
                id="registerPassword"
                type="password"
                placeholder="Password *"
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              rules={[
                { required: true },
                {
                  pattern: "password",
                  message:
                    "* Password requires minimum 5 characters, at least one letter and one number",
                },
              ]}
            >
              <Input
                id="registerPasswordConfirm"
                type="password"
                placeholder="Confirm Password *"
              />
            </Form.Item>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group font-size-sm text-muted">
                By registering your details, you agree with our Terms &amp;
                Conditions, and Privacy and Cookie Policy.
              </div>
            </div>
            <div className="col-12 col-md">
              {/* Newsletter */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="registerNewsletter"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="registerNewsletter"
                  >
                    Sign me up for the Newsletter!
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-sm btn-dark" type="submit">
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
