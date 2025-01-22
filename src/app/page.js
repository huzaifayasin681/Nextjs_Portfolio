import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome to My Portfolio!
        </h1>
      </main>
    </div>
  );
}
