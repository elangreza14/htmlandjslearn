import React, {
  useState,
  useCallback,
  // useEffect
} from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  //   ex callback biasa
  //   const openCloseAccordion = () => {
  //     setOpen((old) => !old);
  //   };

  //   ex callback dengan useCallback
  //   struckturnya gini
  // const openCloseAccordion = useCallback(() => {}, []);
  const openCloseAccordion = useCallback(() => {
    setOpen((old) => !old);
  }, []);

  // useEffect(() => {
  //   let timer1 = setTimeout(() => setOpen(true), 3 * 1000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  return (
    <div style={{ width: 700, padding: 15 }}>
      {/* header accordion bisa di klik, ketika di klik dia bakal expand kebuka, ketika diklik akan menutup*/}
      <div
        style={{
          padding: 15,
          border: "1px solid white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onClick={openCloseAccordion}
        // state awal false maka akan di jadikan true
        // state awal true maka akan di jadikan false
      >
        <div>{props.header}</div>
        <div>{open === false ? <FaChevronRight /> : <FaChevronDown />}</div>
      </div>
      {/* content accordion */}
      {open === true ? (
        <div style={{ border: "1px solid gray", padding: 15 }}>
          {props.children}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
