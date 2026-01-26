import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <Products />
    </>
  );
}
