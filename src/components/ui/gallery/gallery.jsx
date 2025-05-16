import React, {useState} from "react";
import {GalleryStyled, BigImage, MiniImage} from "./styles";

function Gallery({photos:{images, description}})  {
	const [activeImage, setActiveImage] = useState(0);

	return (
		<GalleryStyled>
			{images?.length &&
				<BigImage src={images[activeImage]}  width={385} height={505} alt={description}/>
			}
			{images?.length && images.map((image, index) => {
				if (index === activeImage) {
				  return (
						   <MiniImage active key={index} photo={image} />
						);
					}
					return (
						<MiniImage key={index} photo={image} onClick={() => setActiveImage(index)}/>
					);
               })
			}
		</GalleryStyled>
	);
}

export default Gallery;
