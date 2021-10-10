import "./App.css";
import { Footer, Header } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* contain about link and logo */}
        <Header />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/dashboard">
            <div>Dashboard</div>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
