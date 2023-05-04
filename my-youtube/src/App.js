import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <div >
    <Header/>
    <Body/>
     </div>
     </Provider>
     </>
  );
}

export default App;
