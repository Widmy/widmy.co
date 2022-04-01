import { useState } from "react";
import "./App.scss";
import Intro from "./assets/intro.svg";
function App() {
  const [email, setEmail] = useState("");
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email }),
    })
      .then(() => {
        console.log("enviado");
      })
      .catch((error) => console.error(error, "error"));

    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="bg"></div>
      <h1>Widmy</h1>
      <h3>
        Con Widmy siempre tendrás contigo la historia clínica de tu paciente.
      </h3>
      <img src={Intro} alt="" />
      <p>
        Deja de jugar al gato y el ratón pidiendo la historia clínica de tu
        paciente.
        <br />
        <br />
        Nos conectamos con los sistemas que ya usas para centralizar la
        información de tus pacientes de manera segura.
      </p>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="email"
          maxLength="256"
          name="email"
          data-name="email"
          placeholder="Ingresa tu email"
          id="email"
          value={email}
          onChange={handleChange}
        />

        <button type="submit">Únete a la lista de espera</button>
      </form>
    </div>
  );
}

export default App;
