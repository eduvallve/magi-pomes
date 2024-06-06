import './galleryitem.css';

const GalleryItem = ({ src, title }) => {
  return (
    <figure className="gallery_item">
      <img width="768" height="476" src={`${src}.jpg`} alt={title} loading="lazy" srcSet={`${src}-768x476.jpg 768w, ${src}-300x186.jpg 300w, ${src}.jpg 1024w`} sizes="(max-width: 768px) 100vw, 768px"></img>
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default GalleryItem;