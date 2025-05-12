import Main from "./components/performant-context/main";
import Page from "./components/performant-context/page";
import Sidebar from "./components/performant-context/sidebar";

export default function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
