import styles from'./App.module.css';
import './myframework.css';
import { Context } from './context';
import Layout from './conponents/layout';
import { useReducer } from 'react';
import { reducer } from './models/store/reducer';
import { initialState } from './models/store/state';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className={styles.App}>
      <Context.Provider value ={{state, dispatch}}>
        <Layout/>
      </Context.Provider>
    </div>
  );
}

export default App;
