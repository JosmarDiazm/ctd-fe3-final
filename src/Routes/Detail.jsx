//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
  const params = useParams();
  const [datas, setData] = useState({});
  useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res)=>{
      setData(res.data);
    })


  }, [])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      <h4>Name: {datas.name}</h4>
      <h4>Email: {datas.email}</h4>
      <h4>Phone: {datas.phone}</h4>
      <h4>WebSite: {datas.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail