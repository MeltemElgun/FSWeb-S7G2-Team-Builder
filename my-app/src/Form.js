import React, { useState } from "react";

function Form(props) {
  const {
    takimÜyesi,
    settakimÜyesi,
    handleİsimChange,
    handlesoyIsimChange,
    handleEmailChange,
    handleSubmit,
    handleClearForm,
    handleRolChange,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Takım Üyeleri</legend>
          <label htmlFor="isim">isim</label>
          <input
            type="text"
            placeholder="isim"
            onChange={handleİsimChange}
            value={takimÜyesi.isim}
            id="fIsim"
          />
          <button type="submit" id="fIsim">
            Düzenle
          </button>
          <br />
          <label htmlFor="soyIsim">soyIsim</label>
          <input
            type="text"
            placeholder="soyIsim"
            onChange={handlesoyIsimChange}
            value={takimÜyesi.soyIsim}
            id="soyIsim"
          />
          <button type="submit" id="fSoyIsim">
            Düzenle
          </button>
          <br />
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="email"
            onChange={handleEmailChange}
            value={takimÜyesi.email}
            id="email"
          />
          <button type="submit" id="fSoyEmail">
            Düzenle
          </button>
          <br />
          <label htmlFor="rol">rol</label>
          <input
            type="text"
            placeholder="rol"
            onChange={handleRolChange}
            value={takimÜyesi.rol}
            id="rol"
          />
          <button type="submit" id="fSoyRol">
            Düzenle
          </button>
          <br />
          <button type="button" onClick={handleClearForm}>
            Formu Temizle
          </button>
          <button type="submit">Gönder</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
