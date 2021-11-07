export const initialStateProduct = {
  products: [
    {
      name: "indomie",
      qty: 5,
      defaultValue: 5,
      link: "https://cf.shopee.co.id/file/2ab991506e3f840245a29b10ea9b4ea1",
    },
    {
      name: "kopi",
      qty: 3,
      defaultValue: 3,
      link: "https://cdn1-production-images-kly.akamaized.net/RIyj4gzFA-TBFR_lp8rjlkAwmkQ=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1496968/original/009637600_1486183264-054442300_1483691477-Kopi-Menyebabkan-Anak-Hiperaktif-Mitos-atau-Fakta.jpg",
    },
    {
      name: "saos",
      qty: 7,
      defaultValue: 7,
      link: "https://assets.klikindomaret.com/products/20027096/20027096_1.jpg",
    },
  ],
  checkout: [],
};

//state adalah callback
//action adalah function/ rules
export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        checkout:
          state.checkout.findIndex((x) => x.name === action.stuff) === -1
            ? [
                ...state.checkout,
                {
                  qty: 1,
                  name: action.stuff,
                  link: action.link,
                  defaultValue: action.defaultValue,
                },
              ] // adding into array
            : state.checkout.map((x) => {
                if (x.name === action.stuff) {
                  return { ...x, qty: x.qty + 1 };
                } else {
                  return x;
                }
              }),
        products: state.products.map((x) => {
          if (x.name === action.stuff) {
            return { ...x, qty: x.qty - 1 };
          } else {
            return x;
          }
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        checkout:
          state.checkout.findIndex((x) => x.name === action.stuff) === -1
            ? [...state.checkout]
            : state.checkout.find((x) => x.name === action.stuff && x.qty === 1)
            ? state.checkout.filter((x) => x.name !== action.stuff)
            : state.checkout.map((x) => {
                if (x.name === action.stuff) {
                  return { ...x, qty: x.qty - 1 };
                } else {
                  return x;
                }
              }),
        products: state.products.map((x) => {
          if (x.name === action.stuff) {
            return { ...x, qty: x.qty + 1 };
          } else {
            return x;
          }
        }),
      };
    default:
      return state;
  }
};

// disabled={true}
