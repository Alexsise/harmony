import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemFrame from "./components/ItemFrame/ItemFrame";

const itemIds = [
  "ulfruns_endurance",
  "nautilus_blueprint",
  "wisp_prime_blueprint",
  "molt_augmented",
  "vaykor_hek",
  "telos_akbolto",
  "hystrix_prime_set",
  "boar_prime_set",
  "prisma_ohma",
  "prisma_skana",
  "aksomati_prime_set",
  "legendary_fusion_core",
  "ash_prime_set",
  "melee_crescendo",
  "wyrm_prime_set",
];

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <NavBar />
        <div className="content">
          {itemIds.map((itemId) => (
            <ItemFrame key={itemId} item_id={itemId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
