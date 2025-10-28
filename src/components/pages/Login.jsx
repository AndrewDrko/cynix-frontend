import Logo from "../ui/Logo";
import Button from "../ui/Button";
import styles from "./Login.module.css";
import Anchor from "../ui/Anchor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // se ejecuta después del render
    }
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <Logo />
        <h1>{isAuthenticated && "LOGEADO!"}</h1>
        <h1>Inicia sesión en tu cuenta de Cynix</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
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
        </form>
        {error && (
          <p style={{ color: "red" }}>
            No se ha podido iniciar sesión: {error}
          </p>
        )}
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

export default Login;
