// src/contexts/TableConfigContext.js
import React, { createContext, useContext, useMemo } from 'react';
import { getTableConfig } from '../redux/tableColumn'; // 테이블 구성 가져오는 함수 import

// Context 생성
const TableConfigContext = createContext();

// 테이블 구성 Context를 사용하기 위한 Hook
export const useTableConfig = () => useContext(TableConfigContext);

// Provider 컴포넌트
export const TableConfigProvider = ({ menuCode, children }) => {
  // memoization을 사용해 render 시 tableConfig가 매번 재계산되지 않도록 설정
  const tableConfig = useMemo(() => getTableConfig(menuCode), [menuCode]);

  return (
    <TableConfigContext.Provider value={tableConfig}>
      {children}
    </TableConfigContext.Provider>
  );
};