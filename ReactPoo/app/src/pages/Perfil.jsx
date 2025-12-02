import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Header } from '../components/Header';
import "../styles/perfil.css";

// Imports visuais necessários
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

export default function PerfilUsuario() {
  const { user } = useContext(UserContext);
  
  // Tenta pegar do localStorage se o contexto falhar
  const usuarioLocal = JSON.parse(localStorage.getItem('usuarioLogado'));
  const usuarioAtivo = user || usuarioLocal;

  const [meusJogos, setMeusJogos] = useState([]);

  // Busca a biblioteca assim que abre a tela
  useEffect(() => {
    if (usuarioAtivo && usuarioAtivo.id) {
        buscarBiblioteca();
    }
  }, [usuarioAtivo]);

  const buscarBiblioteca = async () => {
      try {
          // Chama o Java para pegar a lista atualizada
          const resposta = await fetch(`http://localhost:8080/clientes/${usuarioAtivo.id}`);
          if(resposta.ok) {
              const dados = await resposta.json();
              setMeusJogos(dados.biblioteca || []);
          }
      } catch (error) {
          console.error("Erro ao buscar biblioteca:", error);
      }
  };

  const jogarAgora = (url) => {
      if (url) window.open(url, '_blank');
      else alert("Link indisponível.");
  };

  if (!usuarioAtivo) return <h1>Faça login para ver seu perfil.</h1>;

  return (
    <>
      <Header/>
        
      <div className="perfil-container">
        <img className="perfil-foto" src="/imagens/perfil.jpg" alt="Foto de perfil" />
        <h1 className="perfil-nome">Olá, {usuarioAtivo.nome}!</h1>
      </div>

      <div className="jogos-own" style={{ padding: "40px", backgroundColor: "#f4f4f4" }}>
        <h2 className="jogos-user" style={{ marginBottom: "30px", color: "#2e0b07" }}>
            Sua Biblioteca de Jogos 🎮
        </h2>
        
        {meusJogos.length === 0 ? (
             <p style={{textAlign: 'center'}}>Você ainda não possui jogos.</p>
        ) : null}

        <Grid container spacing={3}>
            {meusJogos.map((jogo) => (
                <Grid item xs={12} sm={6} md={4} key={jogo.id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia sx={{ height: 180 }} image={jogo.imagemUrl} title={jogo.nome} />
                        <CardContent>
                            <Typography gutterBottom variant="h6">{jogo.nome}</Typography>
                            <Button 
                                variant="contained" 
                                fullWidth 
                                sx={{ mt: 1, bgcolor: '#2e0b07' }}
                                onClick={() => jogarAgora(jogo.urlJogo)}
                            >
                                JOGAR / BAIXAR
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </div>
    </>
  )
}