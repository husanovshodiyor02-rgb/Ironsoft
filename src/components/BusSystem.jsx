import { useState } from "react";

export default function BusSystem() {
  const [buses, setBuses] = useState([
    { id: 1, route: "Toshkent - Samarqand", seats: 3, reserved: 1 },
    { id: 2, route: "Toshkent - Andijon", seats: 2, reserved: 0 },
  ]);

  const reserve = (id) => {
    setBuses(
      buses.map((b) =>
        b.id === id && b.reserved < b.seats
          ? { ...b, reserved: b.reserved + 1 }
          : b
      )
    );
  };

  const cancel = (id) => {
    setBuses(
      buses.map((b) =>
        b.id === id && b.reserved > 0 ? { ...b, reserved: b.reserved - 1 } : b
      )
    );
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Avtobus Tizimi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {buses.map((b) => (
          <div key={b.id} className="border p-4 rounded-lg shadow-sm">
            <p className="font-semibold">{b.route}</p>
            <p>O‘rinlar: {b.seats}</p>
            <p>Band: {b.reserved}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => reserve(b.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Band qilish
              </button>
              <button
                onClick={() => cancel(b.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Bekor qilish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
