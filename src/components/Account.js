import React, { useState, useEffect } from "react";
import AccountForm from "./AccountForm";
import firebaseDb from "../firebase";
import Navbar from "./Navbar";

const Account = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("accounts").on("value", (snapshot) => {
      if (snapshot.val() != null) setContactObjects({ ...snapshot.val() });
      else setContactObjects({});
    });
  }, []);
  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("accounts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`accounts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete")) {
      firebaseDb.child(`accounts/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">จัดการรหัสผ่าน</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <AccountForm {...{ addOrEdit, currentId, contactObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>ชื่อ</th>
                <th>ชื่อผู้ใช้</th>
                <th>รหัสผ่าน</th>
                <th>ที่อยู่เว็บ</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr>
                    <td>{contactObjects[id].name}</td>
                    <td>{contactObjects[id].username}</td>
                    <td>{contactObjects[id].passwords}</td>
                    <td>{contactObjects[id].url}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
