import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Header } from '../components/Header';

import "../styles/perfil.css"

export default function PerfilUsuario() {
  const { user } = useContext(UserContext); // pega o user do contexto
  
  return (
    <>
      <Header/>
        
      <div className="perfil-container">
        <img className="perfil-foto" src="/imagens/perfil.jpg" alt="Foto de perfil" />

        <h1 className="perfil-nome">
          Olá, {user?.nome || "Visitante"}!
        </h1>
      </div>

      <div className="jogos-own">
        <span className="jogos-user">Seus jogos:</span>
      </div>
    </>
  )
}