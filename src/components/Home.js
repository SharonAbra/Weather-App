import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import ErrorBoundary from "./ErrorBoundary";

export default function Home() {
  return (
    <>
      <Search />
      <ErrorBoundary>
        <Current />
        <Forecast />
      </ErrorBoundary>
    </>
  );
}
