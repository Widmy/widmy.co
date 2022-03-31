import "./App.scss";
import Intro from "./assets/intro.svg";
function App() {
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

      <div className="formulario">
        <input
          type="email"
          maxlength="256"
          name="email"
          data-name="email"
          placeholder="Ingresa tu email"
          id="email"
        />
        <button>Únete a la lista de espera</button>
      </div>
    </div>
  );
}

export default App;
