import { Header } from "../components/Header";
import { padraoFieldStyle } from "../styles/textFieldStyles";
import { useState } from "react";

import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";


import "./login.css"

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dataNascimento, setDataNascimento] = useState("");

  return (
    <>
        <Header/>
        <div className="pai">
            <div className="box-login">
            <h1>Entrar</h1>
            <p>Não possui uma conta? Crie uma aqui!</p>

            <TextField required label="E-mail" sx={padraoFieldStyle}/>
            <TextField required label="Senha" sx={padraoFieldStyle} type={mostrarSenha ? "text" : "password"}
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
              onClick={() => console.log("Você entrou!")}
            >
              Entrar
            </Button>
          </div>
        </div>

    </>
  )
}