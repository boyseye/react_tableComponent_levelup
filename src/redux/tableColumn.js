// src/redux/tableColumns.js

export const Col1Enum = Object.freeze({
  A: 'a',
  B: 'b',
  C: 'c',
});

export const Col2Enum = Object.freeze({
  D: 'd',
  E: 'e',
  F: 'f',
  G: 'g',
});

export const AlternativeCol1Enum = Object.freeze({
  X: 'x',
  Y: 'y',
  Z: 'z',
});

export const AlternativeCol2Enum = Object.freeze({
  P: 'p',
  Q: 'q',
  R: 'r',
  M: 'm',
  N: 'n',
  S: 's',
});

// Configuration for col1 headers, including rowspan and colspan for each column
export const Col1Config = [
  { name: Col1Enum.A, rowspan: 2, colspan: 1 },
  { name: Col1Enum.B, rowspan: 1, colspan: 2 },
  { name: Col1Enum.C, rowspan: 1, colspan: 2 },
];


export const col1api = "api";
export const col2api = "apib";
  


export const Col2Config = [
  { name: Col1Enum.A, rowspan: 1, colspan: 2 },
  { name: Col1Enum.B, rowspan: 1, colspan: 2 },
  { name: Col1Enum.C, rowspan: 1, colspan: 2 },
];

// Define table configurations for different table types
export const TableConfigurations = {
  tableA: {
    col1: Object.values(Col1Enum),
    col2: Object.values(Col2Enum),
    colConfig: Col1Config,
    api : col1api
  },
  tableB: {
    col1: Object.values(AlternativeCol1Enum),
    col2: Object.values(AlternativeCol2Enum),
    colConfig:Col2Config,
    api : col2api
  },
};
