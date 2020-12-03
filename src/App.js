import './App.css';
import Feed from './Feed';
import Header  from './Header.js';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
    {/*If theres no user, go to login page, else, go to normal page*/}
      {!user ? (<Login />) : (
        <div> <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
