export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=Y8I9SogYLTPJkGjvV1L1XJJN6PVNkxsY&q=${ category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}
