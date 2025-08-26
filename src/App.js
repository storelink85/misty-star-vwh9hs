import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="heart">❤️</span>
        ))}
      </div>
      <h1 className="love-text">L'amore è la magia che unisce i  cuori</h1>
    </div>
  );
}

