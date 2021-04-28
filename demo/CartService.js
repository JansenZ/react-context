export default class CartService {
  fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { name: "longma", sex: "female" },
          { name: "paul", sex: "male" }
        ]);
      }, 1000);
    });
  }
}
