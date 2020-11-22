import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
