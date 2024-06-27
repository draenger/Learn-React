import Accordion from "./components/Accordion/Accordion";
import Place from "./components/Place";
import SearchableList from "./components/SearchableList/SearchableList";

import PLACES from "./places";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="expireince" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We deliver results
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can't go wrong with us. We deliver results. Period.</p>
                <p>
                  We have a proven track record of delivering results for our
                  clients.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We know the area like the back of our hand.</p>
                <p>
                  Our local guides have years of experience and know the best
                  spots.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(place) => <Place key={place.id} item={place} />}
        </SearchableList>
        <SearchableList
          items={["Paris", "Berlin", "New York", "Tokyo"]}
          itemKeyFn={(item) => item}
        >
          {(city) => <p>{city}</p>}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
