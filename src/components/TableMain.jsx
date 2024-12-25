// src/components/TableComponent.js
import React, { useState,useEffect } from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";



const TableMain = () => {

  const generatePdf = async () => {
    const element = document.getElementById("content");
    const canvas = await html2canvas(element);
     //2.이미지화
     const imageFile = canvas.toDataURL('image/png');
     //3.pdf준비
     const doc = new jsPDF('p', 'mm', 'a4');
     //pdf 가로 세로 사이즈
     const pageWidth = doc.internal.pageSize.getWidth();
     const pageHeight = doc.internal.pageSize.getHeight();
 
     //이미지의 길이와 pdf의 가로길이가 다르므로 이미지 길이를 기준으로 비율을 구함
     const widthRatio = pageWidth / canvas.width;
     //비율에 따른 이미지 높이
     const customHeight = canvas.height * widthRatio;
     //pdf에 1장에 대한 이미지 추가
     doc.addImage(imageFile, 'png', 0, 0, pageWidth, customHeight);
     //doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
     //감소하면서 남은 길이 변수
     let heightLeft = customHeight;
     //증가하면서 이미지 자를 위치 변수
     let heightAdd = -pageHeight;
 
     // 한 페이지 이상일 경우
     while (heightLeft >= pageHeight) {
         //pdf페이지 추가
         doc.addPage();
         //남은 이미지를 추가
         doc.addImage(imageFile, 'png', 0, heightAdd, pageWidth, customHeight);
         //남은길이
         heightLeft -= pageHeight;
         //남은높이
         heightAdd -= pageHeight;
     }
     //문서저장
     doc.save('filename' + new Date().getTime() + '.pdf');
  };


  return (
    <div>
      <div id="content">
        <h1>PDF로 변환할 내용</h1>
        <p>이 내용이 PDF에 포함됩니다.</p>
      </div>
      <button onClick={generatePdf}>PDF로 저장</button>
    </div>
  );
};

export default TableMain;