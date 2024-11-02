// src/redux/tableColumns.js

export const TableA = {
  COLUMN_1: Object.freeze({
    A: 'a',
    B: 'b',
    C: 'c',
  }),
  
  COLUMN_2: Object.freeze({
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
  }),

  COLUMN_STYLE: [
    { name: 'a', rowspan: 2, colspan: 1 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],

  API: 'CALL GET: API "AAAAA"',
};



export const TableB = {
  COLUMN_1: Object.freeze({
    X: 'x',
    Y: 'y',
    Z: 'z',
  }),
  
  COLUMN_2: Object.freeze({
    P: 'p',
    Q: 'q',
    R: 'r',
    M: 'm',
    N: 'n',
    S: 's',
  }),

  COLUMN_STYLE: [
    { name: 'a', rowspan: 1, colspan: 2 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],
  
  API: 'CALL GET: API "BBBBB"',
};
  

export const TableC = {
  COLUMN_1: Object.freeze({
    X: 'x1',
    Y: 'y2',
    Z: 'z3',
  }),
  
  COLUMN_2: Object.freeze({
    P: 'p',
    Q: 'q',
    R: 'r',
    M: 'm',
    N: 'n',
    S: 's',
  }),

  COLUMN_STYLE: [
    { name: 'a', rowspan: 1, colspan: 2 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],
  
  API: 'CALL GET: API "cc"',
};



// Define table configurations for different table types
export const TableConfigurations = {
  tableA: {
    HEADER_MAIN: TableA.COLUMN_STYLE,
    HEADER_SUB: Object.values(TableA.COLUMN_2),
    API : TableA.API
  },
  tableB: {
    HEADER_MAIN:TableB.COLUMN_STYLE,
    HEADER_SUB: Object.values(TableB.COLUMN_2),
    API : TableB.API
  },
  tableC: {
    HEADER_MAIN:TableC.COLUMN_STYLE,
    HEADER_SUB: Object.values(TableC.COLUMN_2),
    API : TableC.API
  },
};
