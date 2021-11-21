import React from "react";
import "./MakeRoom.css";

function MakeRoom() {
  const images = [
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_1024x1024.png?v=1571606093",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8a9a9a9e6i1u2_download-laughing-iphone-emoji-jpg-emoji-happy-png%2F&psig=AOvVaw3ALVei0fqvC9blO36Q0icJ&ust=1637512230461000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiaociup_QCFQAAAAAdAAAAABAO",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2FEmoji_Icon_-_Sad_Emoji_1024x1024.png%3Fv%3D1571606093&imgrefurl=https%3A%2F%2Femojiisland.com%2Fproducts%2Fsad-iphone-emoji-jpg&tbnid=8YfX8oQdN3aUHM&vet=12ahUKEwjNqrnnrqf0AhXIhXIEHSX5CJsQMygAegUIARDFAQ..i&docid=1u4cOXVuIDKeiM&w=640&h=640&itg=1&q=emoji%20jpg&hl=en&ved=2ahUKEwjNqrnnrqf0AhXIhXIEHSX5CJsQMygAegUIARDFAQ",
  ];
  return (
    <div className="containerMakeRoom">
      <div className="headerMakeRoom">😀 FACE IT</div>
      <div className="c-containerMakeRoom">
        <div className="hero-text-container">
          <div className="hero text">Make this face!</div>
        </div>
        <div className="hero face">
          <img src={images[0]} alt="face" />
        </div>
      </div>
    </div>
  );
}

export default MakeRoom;
