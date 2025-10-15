import Image from "next/image";
import Header from "./_Landing/header/Header";
import IntroHome from "./_Landing/IntroHome/IntroHome";
import FirstDivider from "./_Landing/Dividers/FirstDivider";
import OpeningHours from "./_Landing/Orari/Orari";
import Allyoucaneat from "./_Landing/Allyoucaneat/Allyoucaneat";

export default function Home() {
  return (
    <>
      <Header />
      <IntroHome />
      <Allyoucaneat />
      <OpeningHours />

    </>
  );
}
