import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import data from "./data";

function App() {
  const Data = data.map((item) => {
    return <Main key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      {Data}
    </div>
  );
}

export default App;
