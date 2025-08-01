import { Youtube, ExternalLink } from "lucide-react";

const ProductSlide = ({ product }) => {
  const { title, description, image, youtubeUrl, color } = product;

  return (
    <div className={`slide slide-${color}`}>
      <div className="slide-content">
        <div className="content-wrapper">
          <div className="text-section">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <Youtube className="youtube-icon" size={24} />
              <span className="youtube-text">Watch Video</span>
              <ExternalLink className="external-icon" size={16} />
            </a>
          </div>

          <div className="image-section">
            <div className="image-container">
              <img
                src={image}
                alt={title}
                className="product-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.tif"; // Fallback TIFF image
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;