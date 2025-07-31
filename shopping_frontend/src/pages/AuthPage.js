import React, { useState } from "react";
import * as api from "../services/api";

// PUBLIC_INTERFACE
function AuthPage({ onAuth, user }) {
  const [mode, setMode] = useState("signin"); // 'signin' or 'signup'
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [err, setErr] = useState("");

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PUBLIC_INTERFACE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      let resp;
      if (mode === "signup") {
        // Demo placeholder: Accept any sign-up
        resp = await api.authSignup(form);
      } else {
        resp = await api.authSignin(form);
      }
      onAuth(resp);
    } catch (error) {
      setErr(error.message || "Authentication failed");
    }
  };

  if (user) {
    return (
      <div className="auth-greet">
        <h2>Welcome, {user.name}!</h2>
        <p>You are signed in.</p>
      </div>
    );
  }

  return (
    <section className="auth-section">
      <h2>{mode === "signup" ? "Sign up" : "Sign in"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="auth-input"
            autoFocus
          />
        )}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          className="auth-input"
        />
        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          type="password"
          required
          className="auth-input"
        />
        <button className="auth-btn" type="submit">
          {mode === "signup" ? "Sign up" : "Sign in"}
        </button>
        {err && <div className="auth-error">{err}</div>}
      </form>
      <div className="auth-toggle">
        {mode === "signup" ? (
          <span>
            Already have an account?
            <button onClick={() => setMode("signin")} type="button" className="link-btn">
              Sign in
            </button>
          </span>
        ) : (
          <span>
            New?{" "}
            <button onClick={() => setMode("signup")} type="button" className="link-btn">
              Create an account
            </button>
          </span>
        )}
      </div>
    </section>
  );
}

export default AuthPage;
