import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);


  const handleChangeName = (event) =>{
    setName(event.target.value);
  };

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name.length > 5 && regex.test(email)){
      setShow(true);
      setError(false);

    }else{
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" value={name} onChange={handleChangeName} />
        <label>Email</label>
        <input type="text" value={email} onChange={handleChangeEmail}/>
        <button type="submit">Enviar</button>
      </form>
      {show ? (
        <>
          <h4>Gracias, {name}!</h4>
          <h4>Nos contactaremos contigo via email</h4>
          
        </>
      ): null}
      {error ? <h4>Error:Por favor, verifique su informacion nuevamente</h4>
      : null}

    
    </div>
  );
};

export default Form;
