import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome to My Portfolio!
        </h1>
      </main>
    </div>
  );
}
