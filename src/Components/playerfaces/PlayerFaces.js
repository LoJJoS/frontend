import React from "react";
import "./PlayerFaces.css";

/*
const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: `<div>
                    San Francisco
                    <br/>
                    Next line
                </div>`,
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "Darjeeling",
  },
]; */

const image =
  "https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png";

function PlayerFaces() {
  return (
    <div className="containerPlayerFaces">
      <div className="headerPlayerFaces">
        <div className="headerPlayerFaces name">😀 FACE IT</div>
        <div className="headerPlayerFaces timer">Time Left: 1</div>
      </div>
      <div className="tablePlayerFaces">
        <div className="rowPlayerFaces">
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
        </div>

        <div className="rowPlayerFaces">
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
        </div>

        <div className="rowPlayerFaces">
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
          <div className="scoreContainer">
            <img className="profile" src={image} alt="profile" />
            <div className="playername">Jason</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerFaces;
