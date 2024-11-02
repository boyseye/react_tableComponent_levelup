// src/redux/getInitialState.js
import { TableConfigurations } from './tableColumn';

const getInitialState = (tableMenuCode) => {
  return TableConfigurations[tableMenuCode] || TableConfigurations.tableA; // Fallback to default
};

export default getInitialState;
