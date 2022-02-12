import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Form from './Form'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path={process.env.PUBLIC_URL+'/signup'} exact>
            <Form />
          </Route>
          
          <Route path={process.env.PUBLIC_URL+'/login'} exact>
            <Form />
          </Route>

          <Route path={process.env.PUBLIC_URL+'/'} exact>
            <Home />
          </Route>

          <Route path='*'>
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', fontSize: 26 }}>
              404 - Page Not Found
            </h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
