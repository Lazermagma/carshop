import CarsCards from "@/components/CarsCards/CarsCards.component";
import LogoCards from "@/components/logoCards/LogoCards.component";

function Home() {
  return (
    <div className=" flex flex-col items-center gap-20 p-6 justify-center">
      <LogoCards />
      <CarsCards />
    </div>
  );
}

export default Home;
