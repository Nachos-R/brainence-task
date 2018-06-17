export const addPhotos = (albumId, photos) => ({
    type: 'ADD_PHOTO',
    albumId,
    photos
});

export const clearAddedPhoto = () => ({
    type: 'CLEAR_ADDED_PHOTO'
});