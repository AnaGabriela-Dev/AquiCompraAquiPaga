import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Header } from '../components/Header';
import { api } from "../lib/axios";
import PerfilCard from "../components/PerfilCard";
import { useState, useEffect } from "react";

import "../styles/perfil.css"

export default function Perfil() {
  const { user } = useContext(UserContext); // pega o user do contexto
  const [jogosComprados, setJogosComprados] = useState([]);

  useEffect(() => {
    if (!user?.id) return;

    const carregarJogos = async () => {
      try {
        const response = await api.get(`/compras/${user.id}`);
        setJogosComprados(response.data); 
      } catch (erro) {
        console.error("Erro ao carregar jogos:", erro);
      }
    };

    carregarJogos();
  }, [user]);
  
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
        <div className="lista-jogos-comprados">
          {jogosComprados.length === 0 && (
            <p className="nenhum-jogo">Você ainda não comprou nada.</p>
          )}

          <PerfilCard games={jogosComprados}/>
        </div>
      </div>
    </>
  )
}