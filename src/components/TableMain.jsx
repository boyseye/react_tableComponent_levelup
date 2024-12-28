import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as echarts from "echarts";
import "./App.css";

// Simulating a long-running asynchronous function
const simulateLongTask = (name, delay) => {
  return new Promise((resolve) => {
    console.log(`${name} started...`);
    setTimeout(() => {
      console.log(`${name} completed.`);
      resolve(`${name} data ready`);
    }, delay);
  });
};

// ComponentB: Table with 10 Rows and 9 Columns
const ComponentB = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      const result = await simulateLongTask(`Task ${id.toUpperCase()}`, 2000);
      setData(result);
      setStatus("Completed");
    };
    fetchData();
  }, [id]);

  return (
    <div id={id} className="child-component">
      <h2>Component {id.toUpperCase()} (Small Table)</h2>
      <p>Status: {status}</p>
      {data ? (
        <table>
          <thead>
            <tr>
              {Array.from({ length: 9 }, (_, i) => (
                <th key={i}>Column {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 9 }, (_, colIndex) => (
                  <td key={colIndex}>{`Row ${rowIndex + 1}, Col ${
                    colIndex + 1
                  }`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading table...</p>
      )}
    </div>
  );
};

// ComponentG: Table with 30 Rows and 10 Columns
const ComponentG = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      const result = await simulateLongTask(`Task ${id.toUpperCase()}`, 2500);
      setData(result);
      setStatus("Completed");
    };
    fetchData();
  }, [id]);

  return (
    <div id={id} className="child-component">
      <h2>Component {id.toUpperCase()} (Large Table)</h2>
      <p>Status: {status}</p>
      {data ? (
        <table>
          <thead>
            <tr>
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i}>Column {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 10 }, (_, colIndex) => (
                  <td key={colIndex}>{`Row ${rowIndex + 1}, Col ${
                    colIndex + 1
                  }`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading large table...</p>
      )}
    </div>
  );
};

// ComponentK: Table with 20 Rows and 10 Columns
const ComponentK = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      const result = await simulateLongTask(`Task ${id.toUpperCase()}`, 2500);
      setData(result);
      setStatus("Completed");
    };
    fetchData();
  }, [id]);

  return (
    <div id={id} className="child-component">
      <h2>Component {id.toUpperCase()} (Medium Table)</h2>
      <p>Status: {status}</p>
      {data ? (
        <table>
          <thead>
            <tr>
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i}>Column {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 10 }, (_, colIndex) => (
                  <td key={colIndex}>{`Row ${rowIndex + 1}, Col ${
                    colIndex + 1
                  }`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading medium table...</p>
      )}
    </div>
  );
};

// ComponentE and ComponentX: Bar Chart with ECharts
const BarChartComponent = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      await simulateLongTask(`Task ${id.toUpperCase()}`, 3000);
      setStatus("Completed");
      setChartLoaded(true);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (chartLoaded) {
      const chartDom = document.getElementById(id);
      const myChart = echarts.init(chartDom);

      const option = {
        title: { text: `Bar Chart for ${id.toUpperCase()}`, left: "center" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["A", "B", "C", "D", "E", "F", "G"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [chartLoaded, id]);

  return (
    <div id={id} className="child-component" style={{ height: "400px" }}>
      <h2>Component {id.toUpperCase()} (Bar Chart)</h2>
      <p>Status: {status}</p>
      {!chartLoaded && <p>Loading bar chart...</p>}
    </div>
  );
};

// ComponentM and ComponentO: Round (Pie) Chart with ECharts
const PieChartComponent = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      await simulateLongTask(`Task ${id.toUpperCase()}`, 3000);
      setStatus("Completed");
      setChartLoaded(true);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (chartLoaded) {
      const chartDom = document.getElementById(id);
      const myChart = echarts.init(chartDom);

      const option = {
        title: { text: `Pie Chart for ${id.toUpperCase()}`, left: "center" },
        tooltip: { trigger: "item" },
        legend: { orient: "vertical", left: "left" },
        series: [
          {
            name: "Data",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "A" },
              { value: 735, name: "B" },
              { value: 580, name: "C" },
              { value: 484, name: "D" },
              { value: 300, name: "E" },
            ],
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [chartLoaded, id]);

  return (
    <div id={id} className="child-component" style={{ height: "400px" }}>
      <h2>Component {id.toUpperCase()} (Pie Chart)</h2>
      <p>Status: {status}</p>
      {!chartLoaded && <p>Loading pie chart...</p>}
    </div>
  );
};

// Placeholder Component for Other Components
const PlaceholderComponent = ({ id }) => {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");
      const result = await simulateLongTask(`Task ${id.toUpperCase()}`, 1500);
      setData(result);
      setStatus("Completed");
    };
    fetchData();
  }, [id]);

  return (
    <div id={id} className="child-component">
      <h2>Component {id.toUpperCase()} (Placeholder)</h2>
      <p>Status: {status}</p>
      {data ? <p>Content for {id.toUpperCase()}: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

// Main Component: TableMain
const TableMain = () => {
  const [loading, setLoading] = useState(false);

  // Generate IDs dynamically (B-Z)
  const ids = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("b".charCodeAt(0) + i)
  );

  // PDF Generation
  const createPDF = async () => {
    setLoading(true);
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth() - 20; // 10px padding on both sides
    const pdfHeight = pdf.internal.pageSize.getHeight() - 20; // 10px padding on both sides
    const padding = 10;

    let position = padding;

    const captureComponent = async (id) => {
      const element = document.getElementById(id);
      if (element) {
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const canvasHeight = (canvas.height * pdfWidth) / canvas.width;

        return { imgData, canvasHeight };
      }
      return null;
    };

    const allComponents = await Promise.all(
      ids.map((id) => captureComponent(id))
    );

    allComponents.forEach((component) => {
      if (component) {
        if (position + component.canvasHeight > pdfHeight + padding) {
          pdf.addPage();
          position = padding; // Reset position for new page
        }

        pdf.addImage(
          component.imgData,
          "PNG",
          padding,
          position,
          pdfWidth,
          component.canvasHeight
        );
        position += component.canvasHeight + 10; // Add padding between components
      }
    });

    pdf.save("table-main.pdf");
    setLoading(false);
  };

  return (
    <div className="container">
      <button onClick={createPDF} className="pdf-button" disabled={loading}>
        PDF Creation
      </button>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      <div id="content">
        {ids.map((id) =>
          id === "b" ? (
            <ComponentB key={id} id={id} />
          ) : id === "g" ? (
            <ComponentG key={id} id={id} />
          ) : id === "e" || id === "x" ? (
            <BarChartComponent key={id} id={id} />
          ) : id === "k" ? (
            <ComponentK key={id} id={id} />
          ) : id === "m" || id === "o" ? (
            <PieChartComponent key={id} id={id} />
          ) : (
            <PlaceholderComponent key={id} id={id} />
          )
        )}
      </div>
    </div>
  );
};

export default TableMain;
