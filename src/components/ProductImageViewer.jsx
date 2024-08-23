import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/ProductImageViewer.scss';

function ProductImageViewer({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage = images[selectedImageIndex];

  const getThumbnailClasses = (index) => (
    `product-image-viewer__thumbnail ${index !== 0 ? 'product-image-viewer__thumbnail--left-margin' : ''} ${index === selectedImageIndex ? 'product-image-viewer__thumbnail--selected' : ''}`
  );

  const handleClickThumbnail = (index) => {
    setSelectedImageIndex(index);
  };

  return (
      <div className="product-image-viewer">
        { images && images.length ? (
          <>
            <div className="product-image-viewer__hero-image-wrapper">
            <img
              className="product-image-viewer__hero-image"
              src={`https://rei.com/${selectedImage.heroImageUrl}`}
              alt="Selected" />
            </div>
            <div className="product-image-viewer__thumbnails-wrapper">
              {images.map((image, index) => (
                <button
                  key={`image-${index}`}
                  className={getThumbnailClasses(index)}
                  onClick={() => handleClickThumbnail(index)}
                >
                  <img
                    className="product-image-viewer__thumbnail-image"
                    src={`https://rei.com/${image.thumbnailUrl}`}
                    alt={`Thumbnail ${index}`} />
                </button>))}
            </div>
            </>
          ) : (
            <>
              <p>Something went wrong</p>
            </>
          )}
      </div>
  );
}

ProductImageViewer.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImageViewer;
