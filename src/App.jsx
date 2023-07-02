import { useState } from 'react';
import './App.css';

// 子组件
function Counter(props) {
  // 状态变量
  const [count, setCount] = useState(0);

  // +1
  const increment = () => {
    setCount(count + 1);
  };

  // -1
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>子组件{props.id}</h2>
      <p>值: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// 父组件
function App() {
  const arr = [1, 2, 3];
  return (
    <div>
      <h1>计数器</h1>
      {arr.map((item) => (
        <Counter key={item} id={item} />
      ))}
    </div>
  );
}

export default App;
