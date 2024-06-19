import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error ocured!";
  let message = "Something went wrong!";
  switch (error.status) {
    case 500:
      message = error.data.message;
      break;
    case 404:
      title = "Page not found!";
      message = "The page you are looking for does not exist!";
      break;
    default:
      break;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
