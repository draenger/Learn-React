import Header from "./componets/Header/Header.jsx";
import CoreConcepts from "./componets/CoreConcepts/CoreConcepts.jsx";
import Examples from "./componets/Examples/Examples.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
