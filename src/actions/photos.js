export const savePhotos = (photoArr, albumId) => ({
    type: 'PHOTOS',
    photoArr,
    albumId
});

export const clearPhotos = () => ({
    type: 'CLEAR_PHOTOS',
});