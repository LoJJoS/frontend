import React, { useEffect, useState } from 'react';
import './CarouselRoom.css';

const data = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        caption: `<div>
                    San Francisco
                    <br/>
                    Next line
                </div>`
    },
    {
        image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        caption: "Scotland"
    },
    {
        image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        caption: "Darjeeling"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        caption: "San Francisco"
    },
    {
        image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        caption: "Scotland"
    },
    {
        image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        caption: "Darjeeling"
    },
    {
        image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        caption: "San Francisco"
    },
    {
        image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        caption: "Scotland"
    },
    {
        image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        caption: "Darjeeling"
    }
];

function CarouselRoom(){
    const [miniPhotos, setMiniPhotos] = useState([]);
    const [currentPhoto, setCurrentPhoto] = useState(data[0]);
    useEffect(() => {
        for (let i = 0; i < data.length; i++){

        }
    }, []);
    const changePhotos = (isAdding, currentItem) => {
        const index = data.indexOf(currentItem);
        if (isAdding){
            if (data[index + 1] != null){
                setCurrentPhoto(data[index + 1]);
            }
            else {
                setCurrentPhoto(data[0]);
            }
        }
        else {
            if (data[index - 1] != null){
                setCurrentPhoto(data[index - 1]);
            }
            else {
                setCurrentPhoto(data[data.length - 1]);
            }
        }
    }

    return (   
        <>
        <div className="carousel-wrapper">
            <div className="left-btn-wrapper">
                <input onClick={() => changePhotos(false, currentPhoto)}className="left-button" type="image" src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png"/>
            </div>
            <div className="carousel-hero-container">
                <img className="carousel-hero-image" classalt={currentPhoto.caption} src={currentPhoto.image} />
            </div>
            <div className="right-btn-wrapper">
                <input onClick={() => changePhotos(true, currentPhoto)}className="right-button" type="image" src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png"/>
            </div>
        </div>
        <div className="mini-carousel-wrapper">
            {data.map(img => <input type="image" onClick={() => {setCurrentPhoto(img);}} className="mini-carousel-image" alt={img.caption} src={img.image}/>)}
        </div>
        </>
    );
}

export default CarouselRoom;