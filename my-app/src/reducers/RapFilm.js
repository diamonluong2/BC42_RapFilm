import danhSachGhe from "../RapFilm/danhSachGhe.json";

const data = danhSachGhe;
function OrderTicket(state = data, action) {
  switch (action.type) {
    case "baucua/tang_cuoc": {
    }

    default:
      return state;
  }
}
export default OrderTicket;
