import GalleryItem from "./galleryItem";
import gallery from "./gallery.list";
import './gallery.css';

const Gallery = () => {
  return <div className="gallery">
    {gallery.items.map(item => <GalleryItem key={item.id} src={item.src} title={item.title} />)}
  </div>;
};

export default Gallery;
