import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tanggal: new Date() };
  }

  render() {
    return (
      <header className="d-flex align-items-center justify-content-between sticky-top py-3 px-5">
        <h1 >TODO LIST</h1>
        <h1 className="date">{ this.state.Tanggal.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" }) }</h1>
      </header>
    );
  }
}

export default Header;
