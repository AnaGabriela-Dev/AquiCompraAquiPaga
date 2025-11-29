import { Header } from "../components/Header";
import { padraoFieldStyle } from "../styles/textFieldStyles";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import "./cadastro.css"


export default function Cadastro() {
  // 1. Estados para guardar o que o usuário digita
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // 2. Função que envia os dados para o Spring Boot
  const realizarCadastro = async () => {
    // Verifica se os campos não estão vazios antes de enviar
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha
    };

    try {
      const resposta = await fetch('http://127.0.0.1:8080/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosUsuario)
      });

      if (resposta.ok) {
        alert("Usuário cadastrado com sucesso!");
        // Limpa os campos após o sucesso
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        alert("Erro ao cadastrar. Verifique o console.");
        console.error("Erro do servidor:", resposta);
      }
    } catch (erro) {
      console.error("Erro de conexão:", erro);
      alert("Erro ao conectar com o servidor. O Spring Boot está rodando?");
    }
  };

  return (
    <>
        <Header/>
        <div className="pai">
            <div className="box-cadastro">
            <h1>Cadastro</h1>
            <p>
              Já possui uma conta?
              <Link to="/login" className="link-login"> Entre aqui</Link>
            </p>
            
            {/* Campo NOME */}
            <TextField 
              required 
              label="Nome" 
              sx={padraoFieldStyle}
              value={nome} // Liga o visual à variável
              onChange={(e) => setNome(e.target.value)} // Atualiza a variável ao digitar
            />

            {/* Campo EMAIL */}
            <TextField 
              required 
              label="E-mail" 
              sx={padraoFieldStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo SENHA */}
            <TextField 
              required 
              label="Senha" 
              sx={padraoFieldStyle} 
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setMostrarSenha(!mostrarSenha)} edge="end">
                      {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            }}/>

            {/* Botão CADASTRAR */}
            <Button 
              variant="contained"
              onClick={realizarCadastro} // Chama a função ao clicar
              sx={{
                margin: "50px",
                width: "300px",
                height: "50px",
                fontSize: "18px",
                backgroundColor: "#2e0b07",
                '&:hover': {
                  backgroundColor: "#4a120c", // Uma corzinha pro hover ficar chique
                },
              }}
            >
              Cadastrar
            </Button>
          </div>
        </div>
    </>
  )
}