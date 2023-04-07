import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // countWin: countWin,
  },
});

// store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
store.subscribe(() => {
  // store.getState(): Hàm dùng để lấy ra state hiện tại của store
  console.log("Giá trị state của store:", store.getState());
});
export default store;
