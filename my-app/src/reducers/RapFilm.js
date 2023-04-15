import danhSachGhe from "../RapFilm/danhSachGhe.json";

const data = {
  dsGhe: danhSachGhe,
  selectedChair: [],
};
function OrderTicket(state = data, action) {
  switch (action.type) {
    case "seat/vitri": {
      const indexHang = state.dsGhe.findIndex(
        (item) => item.hang === action.hang
      );
      const danhSachGhe = state.dsGhe[indexHang].danhSachGhe.map((item) => {
        if (item.soGhe === action.soGhe) {
          if (!item.selected) {
            return { ...item, selected: true };
          } else if (item.selected) {
            return { ...item, selected: false };
          }
        }
        return item;
      });

      const dsGhe = state.dsGhe.map((item) => {
        if (item.hang === action.hang) {
          return { ...item, danhSachGhe: danhSachGhe };
        }
        return item;
      });

      const seatBooking = dsGhe[indexHang].danhSachGhe.find(
        (item) => item.selected === true
      );
      const selectedChair = [...state.selectedChair];

      if (seatBooking.selected) {
        selectedChair.push(seatBooking);
      } else {
        const index = selectedChair.findIndex(
          (item) => item.soGhe === seatBooking.soGhe
        );
        console.log("index", index);
        selectedChair.splice(index, 1);
      }
      // selectedChair.filter((item) => {
      //   item.soGhe !== action.soGhe;
      // });
      return { ...state, dsGhe, selectedChair };
    }
    // case "table/thanhtoan": {
    //   const selectedChair = state.selectedChair.map((item) => {
    //     return { ...item, daDat: true };
    //   });
    //   console.log("Thanh toán", selectedChair);
    //   return { ...state, selectedChair };
    // }

    default:
      return state;
  }
}
export default OrderTicket;
