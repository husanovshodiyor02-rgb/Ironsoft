import { useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([
    { id: 1, name: "Telefon", price: 1500, stock: 5 },
    { id: 2, name: "Noutbuk", price: 3500, stock: 3 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.stock <= 0) return alert("Omborda yo‘q!");
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Internet Do‘kon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-lg shadow-sm flex justify-between"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p>Narx: ${p.price}</p>
              <p className="text-sm text-gray-500">Omborda: {p.stock}</p>
            </div>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Qo‘shish
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t pt-3">
        <h3 className="text-lg font-semibold">Buyurtma</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Savatcha bo‘sh.</p>
        ) : (
          <ul className="list-disc ml-5">
            {cart.map((c, i) => (
              <li key={i}>
                {c.name} – ${c.price}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 font-bold">Jami: ${total}</p>
      </div>
    </div>
  );
}
