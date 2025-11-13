import { useState } from "react";

export default function Library() {
  const [books, setBooks] = useState([
    {
      title: "1984",
      author: "George Orwell",
      genre: "Fantastika",
      available: true,
    },
    {
      title: "Sapiens",
      author: "Yuval Harari",
      genre: "Ilmiy",
      available: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const addBook = () => {
    if (books.find((b) => b.title === title))
      return alert("Bu kitob allaqachon mavjud!");
    setBooks([...books, { title, author, genre, available: true }]);
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  const toggleBorrow = (index) => {
    const newBooks = [...books];
    newBooks[index].available = !newBooks[index].available;
    setBooks(newBooks);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kutubxona</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-1/4"
          placeholder="Nom"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded w-1/4"
          placeholder="Muallif"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="border p-2 rounded w-1/4"
          placeholder="Janr"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Qo‘shish
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((b, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{b.title}</p>
              <p>{b.author}</p>
              <p className="text-sm text-gray-500">{b.genre}</p>
              <p
                className={`text-sm ${
                  b.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {b.available ? "Mavjud" : "Olingan"}
              </p>
            </div>
            <button
              onClick={() => toggleBorrow(i)}
              className={`px-3 py-1 rounded text-white ${
                b.available ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {b.available ? "Olish" : "Qaytarish"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
