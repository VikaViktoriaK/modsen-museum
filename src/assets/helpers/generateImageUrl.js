export const generateImageUrl = (image_id) =>
  image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300";
