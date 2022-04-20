// import React, { useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import ToDo from "./img/ToDo.png";
// import bh from "./img/bh.png";
// import Quizzzy from "./img/Quizzzy.png";

// import Quizmodal from "./modals/Quizmodal";
// import Todomodal from "./modals/Todomodal";
// import Bhmodal from "./modals/Bhmodal";

// function Work() {
//   const [openModal, setOpenModal] = useState(false);
//   const [openModal2, setOpenModal2] = useState(false);
//   const [openModal3, setOpenModal3] = useState(false);
//   return (
//     <div id="work">
//       <div className="container">
//         <div className="row center justify-content-around">
//           <h1>My Work</h1>
//           <div style={{ MaxwWidth: "15rem" }} className=" col">
//             <img
//               src={Quizzzy}
//               alt=""
//               style={{ width: "15rem" }}
//               onClick={() => setOpenModal(true)}
//             />
//             <Quizmodal open={openModal} onClose={() => setOpenModal(false)} />
//           </div>
//           <div style={{ MaxwWidth: "15rem" }} className=" col">
//             <img
//               src={bh}
//               alt=""
//               style={{ width: "15rem" }}
//               onClick={() => setOpenModal2(true)}
//             />
//             <Bhmodal open={openModal2} onClose={() => setOpenModal2(false)} />
//           </div>

//           {/* <div style={{ MaxwWidth: "15rem" }} className=" col">
//             <img
//               src={ToDo}
//               alt=""
//               style={{ width: "15rem" }}
//               onClick={() => setOpenModal3(true)}
//             />
//             <Todomodal open={openModal3} onClose={() => setOpenModal3(false)} />
//           </div>  */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Work;
