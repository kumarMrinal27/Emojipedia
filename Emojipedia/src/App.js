import "../public/styles.css";
import Entry from "./Entry"
import Emojipedia from "./emojipedia";

function Mrinal(Kumar){
  return (
    <Entry 
    // key:{Kumar.id}
    emoji={Kumar.emoji}
    name={Kumar.name}
    description={Kumar.description}
    />
  );
}
 function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(Mrinal)}
      </dl>
    </div>
  );
}
export default App;
