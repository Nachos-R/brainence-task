export const selectUser = (userId) => ({
    type: 'SELECT_USER',
    userId
});

export const selectAlbum = (albumId) => ({
    type: 'SELECT_ALBUM',
    albumId
});

export const selectPhoto = (photoId) => ({
    type: 'SELECT_PHOTO',
    photoId
});

export const selectRandomPhoto = (rndPhoto) => ({
    type: 'SELECT_RANDOM_PHOTO',
    rndPhoto
});