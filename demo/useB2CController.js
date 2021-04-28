import useCartController from "./useCartController";
const useB2CController = () => {
  return useCartController({ count: 1, color: "red" });
};
export default useB2CController;
