import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import styles from "./Signup.module.css";
import Button from "../ui/Button";
import Anchor from "../ui/Anchor";
import Form from "../ui/Form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/auth/authSlice";
import { useToast } from "../../contexts/ToastContext";
import { Link, useNavigate } from "react-router";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { notifySuccess, notifyError } = useToast();
  const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      notifyError("Las contraseñas no coinciden");
      return;
    }
    dispatch(signupUser({ name: userName, email, password, passwordConfirm }));
    if (isAuthenticated) notifySuccess("Usuario registrado correctamente");
    navigate("/");
  }

  return (
    <AuthLayout title={"Ingresa tus datos para registrarte"}>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email (jose_jimenez@gmail.com)"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Confirmar Contraseña"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button className={styles.signupSubmitBtn}>Registrarse</Button>
        <Link to="/login" className={styles.signupAnchor}>
          ¿Ya tienes una cuenta?
        </Link>
      </Form>
      {error && (
        <p style={{ color: "red" }}>No se ha podido registrar: {error}</p>
      )}
    </AuthLayout>
  );
}

export default Signup;
