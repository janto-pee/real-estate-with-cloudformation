import ImageGallery from "react-image-gallery";



export default function PDHeader({photos}: {photos: any[]}) {
  return <ImageGallery items={photos} />;
}
