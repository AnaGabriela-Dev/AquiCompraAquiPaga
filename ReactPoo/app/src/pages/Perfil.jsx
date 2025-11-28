import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Header } from '../components/Header';

import "../styles/perfil.css"

export default function PerfilUsuario() {
  const { user } = useContext(UserContext); // pega o user do contexto
  
  return (
    <>
        <Header/>
        <h1 className="title">
          Olá, {user?.nome || "visitante"}!
        </h1>
        <div className="jogos-own">
          <span className="jogos-user">Seus jogos:</span>
        </div>
    </>
  )
}