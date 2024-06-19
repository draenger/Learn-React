import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsRoot() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}
