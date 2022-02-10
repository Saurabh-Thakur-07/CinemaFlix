import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import {BrowserRouter , Route, Switch} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path='/' exact render={(props)=>(
              <>
                <Banner {...props} />
                <Movies {...props} />
              </>
            )} />
            <Route path='/favourites' component={Favourites}/>
        </Switch>
        {/* <Banner />
        <Movies />
        <Favourites /> */}
      </BrowserRouter>    
  );
}

export default App;
