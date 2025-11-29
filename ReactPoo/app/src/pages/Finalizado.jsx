import { Header } from "../components/Header";

import "./finalizado.css"

export default function Finalizado() {

  return (
    <>
        <Header/>
        <div className="finalizado-container">
            <h1>Pagamento concluído! 🎉</h1>
            <p>Obrigado pela compra!</p>
        </div>
        
    </>
  );
}