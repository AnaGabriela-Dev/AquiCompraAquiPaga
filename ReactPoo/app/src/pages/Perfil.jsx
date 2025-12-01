import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Header } from '../components/Header';
import { api } from "../lib/axios"; // Importe o axios se precisar, ou use fetch

// Você vai precisar dos componentes visuais dos cards aqui também se quiser exibir igual
import { GameCards } from "../components/GameCard"; 
// OU importar Grid, Card, etc do Material UI diretamente se preferir um visual diferente

import "../styles/perfil.css"

export default function PerfilUsuario() {
  const { user } = useContext(UserContext); 
  
  // Fallback para localStorage se o contexto falhar no refresh
  const usuarioLocal = JSON.parse(localStorage.getItem('usuarioLogado'));
  const usuarioAtivo = user || usuarioLocal;

  const [meusJogos, setMeusJogos] = useState([]);

  useEffect(() => {
    if (usuarioAtivo && usuarioAtivo.id) {
        buscarMeusJogos();
    }
  }, [usuarioAtivo]);

  const buscarMeusJogos = async () => {
      try {
          // Busca o cliente completo para pegar a biblioteca
          const response = await api.get(`/clientes/${usuarioAtivo.id}`);
          setMeusJogos(response.data.biblioteca || []);
      } catch (error) {
          console.error("Erro ao buscar biblioteca:", error);
      }
  };

  return (
    <>
      <Header/>
        
      <div className="perfil-container">
        <img className="perfil-foto" src="/imagens/perfil.jpg" alt="Foto de perfil" />
        <h1 className="perfil-nome">
          Olá, {usuarioAtivo?.nome || "Visitante"}!
        </h1>
      </div>

      <div className="jogos-own">
        <span className="jogos-user">Sua Biblioteca:</span>
        
        {meusJogos.length === 0 ? (
            <p style={{textAlign: 'center', marginTop: '20px'}}>Você ainda não possui jogos.</p>
        ) : (
            // Reutilizando seu componente GameCards para mostrar a lista
            <div style={{ marginTop: '30px' }}>
                <GameCards games={meusJogos} isLibrary={true} /> 
            </div>
        )}
      </div>
    </>
  )
}