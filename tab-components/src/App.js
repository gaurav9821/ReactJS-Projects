import { useState } from "react";
import "./App.css";
function App() {
  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
    [
      "Vanilla JavaScript requires imperative programming",
      "Imperative Programming: You define all the steps needed to achieve a result",
      "React on the other hand embraces declarative programming",
      "With React, you define the goal and React figures out how to get there",
    ],
  ];
  const [isActiveTab, setIsActiveTab] = useState(0);
  return (
    <div className="App">
      <div className="header">
        <img alt="React logo" src="logo192.png" />
        <div className="header-info">
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </div>

      <div className="tab">
        <div className="tab-container">
          <button
            onClick={() => setIsActiveTab(0)}
            className={isActiveTab === 0 ? "active" : ""}
          >
            Why React?
          </button>
          <button
            onClick={() => setIsActiveTab(1)}
            className={isActiveTab === 1 ? "active" : ""}
          >
            Core features
          </button>
          <button
            onClick={() => setIsActiveTab(2)}
            className={isActiveTab === 2 ? "active" : ""}
          >
            Related Resources
          </button>
          <button
            onClick={() => setIsActiveTab(3)}
            className={isActiveTab === 3 ? "active" : ""}
          >
            React vs JS
          </button>
        </div>
        <div className="tab-content">
          <ul>
            {content[isActiveTab].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
