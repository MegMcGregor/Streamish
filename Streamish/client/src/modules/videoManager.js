const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json())
};

export const searchVideos = (search) => {
    return fetch(`${baseUrl}/search?q=${search}&sortDesc=true`)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};
