import { Header } from "../components/Header";
import { padraoFieldStyle } from "../styles/textFieldStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <--- 1. Importação para mudar de página
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import "./login.css"

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate(); // <--- 2. Hook de navegação
  const [mostrarSenha, setMostrarSenha] = useState(false);
  
  // <--- 3. Estados para capturar o que é digitado
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // <--- 4. A Lógica de Login
  const realizarLogin = async () => {
    const dadosLogin = {
      email: email,
      senha: senha
    };

    try {
      const resposta = await fetch('http://localhost:8080/clientes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosLogin)
      });

      if (resposta.ok) {
        // SUCESSO: O Java mandou o objeto Cliente (JSON)
        const cliente = await resposta.json();
        login(cliente);  // <-- SALVA O USUÁRIO NO CONTEXTO
        alert("Bem-vindo(a), " + cliente.nome + "!");
        navigate("/"); // Redireciona para a Home (Vitrine)
      } else {
        // ERRO: O Java mandou uma mensagem de texto explicativa (404 ou 401)
        const mensagemErro = await resposta.text();
        alert(mensagemErro); // Exibe: "Eita! Não encontramos..." ou "Senha incorreta..."
      }

    } catch (erro) {
      console.error("Erro:", erro);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
        <Header/>
        <div className="pai">
            <div className="box-login">
            <h1>Entrar</h1>
            <p>Não possui uma conta? 
              <Link to="/cadastro" className="link-login"> Crie uma aqui!</Link>
            </p>

            <TextField 
              required 
              label="E-mail" 
              sx={padraoFieldStyle}
              value={email} // Conecta o visual à variável
              onChange={(e) => setEmail(e.target.value)} // Atualiza ao digitar
            />

            <TextField 
              required 
              label="Senha" 
              sx={padraoFieldStyle} 
              type={mostrarSenha ? "text" : "password"}
              value={senha} // Conecta o visual à variável
              onChange={(e) => setSenha(e.target.value)} // Atualiza ao digitar
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

            <Button 
              variant="contained"
              sx={{
                margin: "50px",
                width: "300px",
                height: "50px",
                fontSize: "18px",
                backgroundColor: "#2e0b07",
              }}
              onClick={realizarLogin} // <--- 5. Chama a função ao clicar
            >
              Entrar
            </Button>
          </div>
        </div>

    </>
  )
}