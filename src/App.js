import Form from "./form";

const movies = [
  {
    name: "Avenger",
    aviable: 5
  },
  {
    name: "Terminador",
    aviable: 3
  }
];

export default function App() {
  return (
    <div>
      {" "}
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
