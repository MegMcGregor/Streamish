import React, { useEffect, useState } from "react";
import { getWithComments } from "../modules/videoManager";
import Video from './Video';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getWithComments().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
