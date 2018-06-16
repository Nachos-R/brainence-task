export const saveRandPhotos = (randomPhotoUrl) => ({
    type: 'RAND_PHOTOS',
    randomPhotoUrl    
});

export const clearRandPhotos = () => ({
    type: 'CLEAR_RAND_PHOTOS'
});