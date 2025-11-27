import { Header } from '../components/Header';
import { Corpo } from '../components/Corpo';

export default function Home({addToCart}) {
  return (
    <>
      <Header />

      <Corpo addToCart={addToCart}/>
    </>
  );
}