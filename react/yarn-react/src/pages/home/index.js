import React from "react";

const igraciasImage =
  "https://igracias.telkomuniversity.ac.id/styles/201706/images/BACKGROUND1.jpg";
const HomePage = () => {
  return (
    <div>
      <div>
        <img
          alt=""
          src={igraciasImage}
          height={"100%"}
          width={"100%"}
          style={{
            maxHeight: "90vh",
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
