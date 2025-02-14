import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const gasCylinders = [
    { id: 1, size: "3kg", price: 1000, image: "/3kg-gas.png" },
    { id: 2, size: "6kg", price: 2000, image: "/6kg-gas.png" },
    { id: 3, size: "13kg", price: 3500, image: "/13kg-gas.png" },
  ];

  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Gas Connect</h1>
        <div className="flex gap-4">
          <Link 
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Login
          </Link>
          <Link 
            href="/signup"
            className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gasCylinders.map((cylinder) => (
            <div 
              key={cylinder.id} 
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={cylinder.image}
                alt={`${cylinder.size} Gas Cylinder`}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{cylinder.size} Cylinder</h2>
              <p className="text-gray-600 mb-4">Ksh {cylinder.price}</p>
              <button 
                className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => {/* Add order handling logic */}}
              >
                Order Now
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
