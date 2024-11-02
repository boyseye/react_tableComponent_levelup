// src/redux/tableColumns.js
// Table A 
export const TableA = {
  
  HEADER_MAIN: [
    { name: 'a', rowspan: 2, colspan: 1 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],
  
  HEADER_SUB: Object.freeze({
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
  }),

  API: 'CALL GET: API "AAAAA"',
};



export const TableB = {

  HEADER_MAIN: [
    { name: 'a', rowspan: 1, colspan: 2 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],
  
  HEADER_SUB: Object.freeze({
    P: 'p',
    Q: 'q',
    R: 'r',
    M: 'm',
    N: 'n',
    S: 's',
  }),

  API: 'CALL GET: API "BBBBB"',
};
  

export const TableC = {
  
  HEADER_MAIN: [
    { name: 'a', rowspan: 1, colspan: 2 },
    { name: 'b', rowspan: 1, colspan: 2 },
    { name: 'c', rowspan: 1, colspan: 2 },
  ],

  HEADER_SUB: Object.freeze({
    P: 'p',
    Q: 'q',
    R: 'r',
    M: 'm',
    N: 'n',
    S: 's',
  }),

  API: 'CALL GET: API "cc"',
};



// Define table configurations for different table types
export const TableConfigurations = {
  
  tableA: {
    HEADER_MAIN: TableA.HEADER_MAIN,
    HEADER_SUB: Object.values(TableA.HEADER_SUB),
    API : TableA.API
  },

  
  tableB: {
    HEADER_MAIN:TableB.HEADER_MAIN,
    HEADER_SUB: Object.values(TableB.HEADER_SUB),
    API : TableB.API
  },


  tableC: {
    HEADER_MAIN:TableC.HEADER_MAIN,
    HEADER_SUB: Object.values(TableC.HEADER_SUB),
    API : TableC.API
  },





};
