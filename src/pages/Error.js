import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error has ocurred</h1>
        <p>The page you requested doesn't seem to exist. Sorry!</p>
      </main>
    </>
  );
}

export default ErrorPage;
