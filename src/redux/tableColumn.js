// src/redux/tableColumns.js

// TableA와 TableB에 대한 구성 정의
export const TableA = {

  HEADER_ROW_1: [
    { name: 'a', rowspan: 1, colspan: 1 },
    { name: 'b', rowspan: 1, colspan: 1 },
    { name: 'c', rowspan: 1, colspan: 1 },
  ],

  HEADER_ROW_2: Object.freeze({
    A: 'd',
    B: 'e',
    C: 'f',
  }),

  API: 'api',
};

export const TableB = {
  
  HEADER_ROW_1: [
    { name: 'x', rowspan: 2, colspan: 1 },
    { name: 'y', rowspan: 1, colspan: 1 },
    { name: 'z', rowspan: 1, colspan: 1 },
  ],
  HEADER_ROW_2: Object.freeze({
    X: 'x',
    Y: 'y',
  }),

  API: 'apib',
};

// 메뉴 코드와 테이블 구성을 매핑
const tableMapping = {
  tableA: TableA,
  tableB: TableB,
};

// menuCode에 따라 구성을 생성하는 함수
export const getTableConfig = (menuCode) => {
  const table = tableMapping[menuCode];

  if (!table) {
    console.warn(`Configuration for ${menuCode} not found. 기본 설정 (TableA)로 대체합니다.`);
    return {
      HEADER_ROW_1: TableA.HEADER_ROW_1,
      HEADER_ROW_2: TableA.HEADER_ROW_2 ? Object.values(TableA.HEADER_ROW_2) : undefined,
      api: TableA.API,
    };
  }

  return {
    HEADER_ROW_1: table.HEADER_ROW_1,
    HEADER_ROW_2: table.HEADER_ROW_2 ? Object.values(table.HEADER_ROW_2) : undefined,
    api: table.API,
  };
};