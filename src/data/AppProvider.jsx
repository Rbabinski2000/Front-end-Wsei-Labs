import {data} from "./module-data";
import AppReducer from './AppReducer';
import { useReducer } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
    children:PropTypes.node.isRequired
  }

export default AppProvider;