import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
