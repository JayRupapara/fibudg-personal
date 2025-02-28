export const getOptimizedImageUrl = (imagePath, width) => {
  // If it's an external image (like pravatar)
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For local images, you can add query parameters for optimization
  return `${imagePath}?w=${width}&q=75`;
}; 