import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL+'/'} exact>
            <Home/>
          </Route>
          <Route path='*'>
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', fontSize: 26 }}>
              404 - Page Not Found
            </h1>
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
