import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from '../components/Header';
import { Corpo } from '../components/Corpo';

// Se você já tem a lógica de 'addToCart' definida no App.jsx ou aqui, passe ela.
// Se não tiver, pode passar uma função vazia ou implementar aquela lógica de POST backend que fizemos antes.
export default function Home({ addToCart }) {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      window.scrollTo({
        top: state.scrollTo,
        behavior: "smooth",
      });
    }
  }, [state]);

  return (
    <>
      <Header />
      <Corpo addToCart={addToCart}/>
    </>
  );
}