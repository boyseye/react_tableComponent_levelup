import React from 'react';
import { Provider } from 'react-redux';
import TableMain from './components/TableMain';
import store from './redux/store'


const App = () => (
  <Provider store={store}>
    {/* Pass 'default' or 'alternative' as type to change the table structure */}
    <TableMain menuCode="tableA"  />
  </Provider>
);

export default App;
