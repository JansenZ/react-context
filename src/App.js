import React from "react";
import "./style.css";
import Cart from "./Cart";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Cart needWrap={true}>
        <span className="inner">欢迎来到我的世界1</span>
      </Cart>
      <span className="split">
        ------------------------------------------------------------------------------------------------------------------------------下面是另一个购物车，和上面是兄弟关系，只有同一个createpage出来的才会共享
      </span>
      <Cart>
        <span className="inner">欢迎来到我的世界2</span>
      </Cart>
    </div>
  );
}
