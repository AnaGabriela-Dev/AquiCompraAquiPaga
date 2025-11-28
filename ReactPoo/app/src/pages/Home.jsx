import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header } from '../components/Header';
import { Corpo } from '../components/Corpo';

export default function Home({addToCart}) {
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