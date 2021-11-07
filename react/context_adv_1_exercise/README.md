// const [state, dispatch] = useReducer(
// productReducer,
// initialStateProduct,
// () =>
// window.localStorage.getItem
// ? JSON.parse(window.localStorage.getItem("test"))
// : initialStateProduct
// );

// useEffect(() => {
// window.localStorage.setItem("test", JSON.stringify(state));
// }, [state]);
const [cookies, setCookie] = useCookies(["name"]);
const [state, dispatch] = useReducer(
productReducer,
initialStateProduct,
() => {
return cookies && cookies?.name?.products && cookies?.name?.checkout
? {
products: cookies.name.products,
checkout: cookies.name.checkout,
}
: initialStateProduct;
}
);

useEffect(() => {
setCookie("name", JSON.stringify(state), { path: "/" });
}, [setCookie, state]);
