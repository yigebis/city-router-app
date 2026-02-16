import RouteForm from "@/components/RouteForm";

export default function Home(){
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Smart Route Optimizer
      </h1>

      <RouteForm />
    </main>
  );
}