import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("เข้าสู่ระบบล้มเหลว");
    }
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>อีเมล:</strong> {currentUser.email}
          <Link onClick={handleLogout} className="btn btn-primary w-100 mt-3">
            ออกจากระบบ
          </Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
