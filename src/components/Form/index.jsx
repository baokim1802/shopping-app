import classNames from "classnames";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useForceRender } from "../../core/hooks/useForceRender";
import validate from "../../core/utils/validate";

const Context = createContext({});

const useFormContext = () => useContext(Context);

export default function Form({ children, onFinish, form }) {
  let _form = Form.useForm();

  _form = useMemo(() => {
    if (form) return form;
    return _form;
  }, [form, _form]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const rules = {};
    let errorObj = {};

    for (let i in _form.fields) {
      rules[i] = _form.fields[i].rules;
      errorObj[i] = undefined;
    }

    errorObj = Object.assign(errorObj, validate(_form.values, rules));

    for (let i in errorObj) {
      if (errorObj[i] === undefined) delete errorObj[i];
    }

    if (Object.keys(errorObj).length === 0) {
      onFinish?.(_form.values);
    }

    _form.setErrors(errorObj);
  };

  return (
    <Context.Provider value={_form}>
      <form onSubmit={handleSubmit}>{children}</form>
    </Context.Provider>
  );
}

Form.Item = ({ name, label, rules, children, className }) => {
  const { registerFields, destroyFields, values, errors } = useFormContext();

  const render = useForceRender();

  const state = useRef({
    _label: label || children?.props?.label,
    _name: name || children?.props?.name,
  });

  const { _name, _label } = state.current;

  useEffect(() => {
    registerFields(_name, {
      rules,
    });

    return () => {
      destroyFields(_name);
    };
  }, []);

  if (children) {
    return (
      <div className={classNames("Form-Item", className)}>
        {_label && (
          <label>
            <p>{_label}</p>
          </label>
        )}
        <div>
          {React.cloneElement(children, {
            ...children.props,
            value: values[_name],
            onChange: (value) => {
              // const v = value?.target?.value || value?.target?.checked || value;
              const v = value?.target?.value;
              if (rules) {
                const errorObj = validate(
                  {
                    [_name]: values[_name],
                  },
                  {
                    [_name]: rules,
                  }
                );

                if (Object.keys(errorObj).length > 0) {
                  errors[_name] = errorObj[_name];
                } else {
                  errors[_name] = undefined;
                }
                // console.log(v);
                values[_name] = v;
                render();
              }
            },
          })}
        </div>
        {errors[_name] && <p className="error-text">{errors[_name]}</p>}
      </div>
    );
  }

  return <div className="Form-Item" />;
};

Form.useForm = () => {
  const [_values, _setValues] = useState({});
  const [_errors, _setErrors] = useState({});
  const [_fields, _setFields] = useState({});

  const setValues = (values) => {
    _setValues((prevProps) => {
      return {
        ...prevProps,
        ...values,
      };
    });
  };

  const setErrors = (errors) => {
    _setErrors((prevProps) => {
      return {
        ...prevProps,
        ...errors,
      };
    });
  };

  const registerFields = (name, options) => {
    _fields[name] = options;
  };

  const destroyFields = (name) => {
    delete _fields[name];
  };

  const res = useMemo(() => {
    return {
      values: _values,
      errors: _errors,
      fields: _fields,
      setValues,
      setErrors,
      registerFields,
      destroyFields,
    };
  }, [_errors, _values, _fields]);

  return res;
};
