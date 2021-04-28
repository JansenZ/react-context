import React from "react";
import { createPage, inject } from "./connect";
import useB2CController from "./useB2CController";

export function WrapCart(props) {
  const { state, add, getByte } = props;
  const { count, datalist, loading } = state;
  return (
    <div>
      {props.children}
      <div>
        {loading && <p>loading...</p>}
        {datalist &&
          datalist.map(item => {
            return (
              <div key={item.name}>
                <p>{item.name + "是我名字,我的性别是：" + item.sex}</p>
              </div>
            );
          })}
        <p className="btn" onClick={getByte}>
          获取数据
        </p>
      </div>
      <p>count: {count}</p>
      <div onClick={add} className="btn">
        给我加
      </div>
      <InjectSide action={"我是inject的组件，不需要传props"} />
    </div>
  );
}
export default createPage(useB2CController)(WrapCart);

const Side = React.memo(props => {
  const { state, action, changeColor } = props;
  const { count, color } = state;
  return (
    <div className="wrapper">
      <p>能共享的count: {count}</p>
      <p>{action || "我是直接引入的组件，props都是手动传的"}</p>
      <p className={color}>{color}</p>
      <div className="btn" onClick={changeColor}>
        修改颜色
      </div>
    </div>
  );
});
const InjectSide = inject()(Side);
