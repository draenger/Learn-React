import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Failed to fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = async () => {
  return defer({
    events: loadEvents(),
  });
};
