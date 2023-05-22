import React from "react";

const styles = {
  img: {
    width: "400px",
  },
};

const Info = () => {
  return (
    <div>
      <img src="/img/dome-logo-large.png" style={styles.img} />
      <h1>A Sample Thing</h1>
      <p>Let me tell you about this thing.</p>
      <p>It is a handy thing.</p>
    </div>
  );
};
export default Info;
