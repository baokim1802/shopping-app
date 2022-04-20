import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useToggle } from "../../core/hooks/useToggle";
import { password, required } from "../../core/utils/rule";
import validate from "../../core/utils/validate";
import Button from "../../components/Button";
import { actionFetchChangePassword } from "../../store/user";
import { message } from "antd";

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const isFetchUpdate = useToggle();
  const form = Form.useForm();

  useEffect(() => {
    form.setValues(user);
  });

  const onFinish = (values) => {
    console.log(values);
    isFetchUpdate.setTrue();
    form.setErrors({ oldPassword: "", newPassword: "" });

    if (values.oldPassword) {
      const errors = validate(values, {
        oldPassword: [password()],
        newPassword: [password()],
      });

      form.setErrors(errors);

      if (Object.keys(errors).length === 0) {
        dispatch(
          actionFetchChangePassword({
            data: {
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            },
            error(error) {
              message.error(error);
            },
            success() {
              message.success("Password changed successfully!");
            },
          })
        );
      }
    }
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <div className="row">
        <div className="col-12 col-md-12">
          {/* Email */}
          <Form.Item name="name" rules={[required("Name")]}>
            <Input placeholder="Full Name *" />
          </Form.Item>
        </div>
        <div className="col-12">
          <Form.Item name="email" rules={[required("Email")]}>
            <Input placeholder="Email *" />
          </Form.Item>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <Form.Item name="oldPassword">
            <Input placeholder="Current Password" />
          </Form.Item>
        </div>
        <div className="col-12 col-md-6">
          <Form.Item name="newPassword">
            <Input placeholder="New Password" />
          </Form.Item>
        </div>
        <div className="col-12 col-lg-6">
          {/* Birthday */}
          <div className="form-group">
            {/* Label */}
            <label>Date of Birth</label>
            {/* Inputs */}
            <div className="form-row">
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountDate">
                  Date
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountDate"
                >
                  <option>10</option>
                  <option>11</option>
                  <option selected="">12</option>
                </select>
              </div>
              <div className="col">
                {/* Date */}
                <label className="sr-only" htmlFor="accountMonth">
                  Month
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountMonth"
                >
                  <option>January</option>
                  <option selected="">February</option>
                  <option>March</option>
                </select>
              </div>
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountYear">
                  Year
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountYear"
                >
                  <option>1990</option>
                  <option selected="">1991</option>
                  <option>1992</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Gender */}
          <div className="form-group mb-8">
            <label>Gender</label>
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-sm btn-outline-border active">
                <input type="radio" name="gender" defaultChecked="" /> Male
              </label>
              <label className="btn btn-sm btn-outline-border">
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Button */}
          <Button loading={isFetchUpdate} cnames="btn btn-dark" type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </Form>
  );
}
