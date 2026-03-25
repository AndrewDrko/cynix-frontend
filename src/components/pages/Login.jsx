import Logo from "../ui/Logo";
import Button from "../ui/Button";
import styles from "./Login.module.css";
import Anchor from "../ui/Anchor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";
import Form from "../ui/Form";
import AuthLayout from "../layout/AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  return (
    <AuthLayout title={"Inicia Sesión en tu Cuenta de Cynix"}>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
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
        <Button className={styles.loginSubmitBtn}>Iniciar sesión</Button>
        <Anchor className={styles.loginAnchor}>
          ¿Olvidaste tu contraseña?
        </Anchor>
      </Form>
      {error && (
        <p style={{ color: "red" }}>No se ha podido iniciar sesión: {error}</p>
      )}
    </AuthLayout>
  );
}

export default Login;
