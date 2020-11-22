import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
