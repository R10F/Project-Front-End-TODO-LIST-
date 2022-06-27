import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tanggal: new Date() };
  }

  render() {
    return (
      <header className="d-flex align-items-center  sticky-top py-3 px-5 m-0">
    
        <img src={require("././img/todo.png")} alt="icon" style={{width : "30px", height : "30px"}}  /> 
        <h1 className="fs-2 ms-3">TO-DO LIST</h1>
       
        <h1 className="date ms-auto">{this.state.Tanggal.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</h1>
      </header>
    );
  }
}

export default Header;
