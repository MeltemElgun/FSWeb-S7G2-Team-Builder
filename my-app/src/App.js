import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [takimÜyesi, settakimÜyesi] = useState({
    isim: "",
    soyIsim: "",
    email: "",
    rol: "",
  });
  const [duzenlenecekUye, setduzenlenecekUye] = useState("");

  const handleİsimChange = (event) => {
    settakimÜyesi({ isim: event.target.value });
  };
  const handlesoyIsimChange = (event) => {
    settakimÜyesi({ soyIsim: event.target.value });
  };
  const handleEmailChange = (event) => {
    settakimÜyesi({ email: event.target.value });
  };
  const handleRolChange = (event) => {
    settakimÜyesi({ rol: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClearForm = (event) => {
    settakimÜyesi({
      isim: "",
      soyIsim: "",
      email: "",
      rol: "",
    });
  };

  return (
    <div className="App">
      <Form
        takimÜyesi={takimÜyesi}
        settakimÜyesi={settakimÜyesi}
        handleİsimChange={handleİsimChange}
        handlesoyIsimChange={handlesoyIsimChange}
        handleEmailChange={handleEmailChange}
        handleSubmit={handleSubmit}
        handleClearForm={handleClearForm}
        handleRolChange={handleRolChange}
        duzenlenecekUye={duzenlenecekUye}
        setduzenlenecekUye={setduzenlenecekUye}
      />
    </div>
  );
}

export default App;
