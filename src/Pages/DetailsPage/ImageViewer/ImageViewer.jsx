import React, {useState} from "react";
import './styles.css';

export const ImageViewer = ({imagesArr}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!imagesArr || imagesArr.length === 0) {
        return <div className="no-images">Нет изображений</div>;
    }

    return (
        <div>
            <div className="main-image">
                <img src={imagesArr[currentIndex]} alt="large" />
            </div>

            <div className="small-images-container">
                {imagesArr.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={index === currentIndex ? "small-image active" : "small-image"}
                    >
                        <img src={image} alt="thumb" />
                    </div>
                ))}
            </div>
        </div>
    );
}