import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import styles from "./ImageBox.module.css";
/**
 * component that previews images in a resizable component.
 * it a close button for each image
 * @param {Array} images URL of images to preview
 * @param {Function} onDeleteImage takes an id as an input for the parent component
 * to has remove image of repective id
 */

function ImageBox({images, onDeleteImage, deleteEnabled}) {
  let imageWidth = 65;
  const [imagesArr, setImagesArr] = useState([]);

  if (images.length > 1) {
    imageWidth = 33;
  }
  useEffect(() => {
    const tempImages = [];
    images.forEach((image, index) => {
      tempImages.push({
        id: index,
        imageUrl: image,
      });
    });
    setImagesArr(tempImages);
  }, [images]);
  const imageContainer = (image) => (
    <div
      data-testid="image-box-render-test"
      id="image-box-image-canvas"
      className={styles.image}
      key={image.id}
      style={{
        backgroundImage: `url(${image.imageUrl})`,
        paddingBottom: `${imageWidth}%`,
        width: `${imageWidth}%`,
      }}
    >
      {!deleteEnabled && (
        <div
          id="image-box-delete-button"
          className={styles["delete-image"]}
          role="button"
          tabIndex={0}
          onClick={() => onDeleteImage(image.imageUrl)}
        >
          X
        </div>
      )}
    </div>
  );

  return (
    <div data-testid="imagebox" className={styles.imagebox} id="imagebox">
      <div className={styles["row-images"]}>
        {imagesArr.map((image, index) =>
          index <= 1 ? imageContainer(image) : ""
        )}
      </div>
      <div className={styles["row-images"]}>
        {imagesArr.map((image, index) =>
          index > 1 ? imageContainer(image) : ""
        )}
      </div>
    </div>
  );
}

ImageBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteEnabled: PropTypes.bool,
  onDeleteImage: PropTypes.func,
};

ImageBox.defaultProps = {
  deleteEnabled: false,
  onDeleteImage: function temp() {},
};
export default ImageBox;
