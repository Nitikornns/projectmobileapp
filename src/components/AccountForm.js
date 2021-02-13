import React, { useState, useEffect } from "react";
const ContactsForm = (props) => {
  const initialFieldValues = {
    name: "",
    username: "",
    passwords: "",
    url: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i className="fas fa-globe"></i>
          </span>
        </div>
        <input
          className="form-control"
          placeholder="ชื่อ"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div class="input-group mb-3 col-md-6">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input
            className="form-control"
            placeholder="ชื่อผู้ใช้"
            name="username"
            value={values.username}
            onChange={handleInputChange}
          />
        </div>
        <div class="input-group mb-3 col-md-6">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <input
            className="form-control"
            placeholder="รหัสผ่าน"
            name="passwords"
            value={values.passwords}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="ที่อยู่เว็บ"
          name="url"
          value={values.url}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "บันทึก" : "อัพเดท"}
          className="btn btn-primary btn-block"
        ></input>
      </div>
    </form>
  );
};

export default ContactsForm;
