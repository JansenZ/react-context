import { useCallback, useMemo } from "react";
import useSetState from "./useSetState";
import CartService from "./CartService";

const useController = initVal => {
  const [state, setState] = useSetState(initVal);
  const { count, color } = state;
  const service = useMemo(() => new CartService(), []);

  // 数量添加
  const add = useCallback(() => {
    setState({
      count: count + 1
    });
  }, [setState, count]);

  // 修改颜色
  const changeColor = useCallback(() => {
    setState(pre => ({
      ...pre,
      color: pre.color == "red" ? "teal" : "red"
    }));
  }, [color, setState]);

  // 获取数据
  const getByte = useCallback(async () => {
    setState({
      loading: true
    });
    const data = await service.fetchData();
    setState({
      datalist: data,
      loading: false
    });
  }, [service, setState]);

  return {
    state,
    add,
    changeColor,
    getByte
  };
};
export default useController;
