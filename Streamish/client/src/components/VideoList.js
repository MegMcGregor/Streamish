import React, { useEffect, useState } from "react";
import { getWithComments, searchVideos } from "../modules/videoManager";
import Video from './Video';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");

    const getVideos = () => {
        getWithComments().then(videos => setVideos(videos));
    };

    const userVideoSearch = () => {
        searchVideos(search).then(videos => setVideos(videos))
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let userInput = e.target.value;
        setSearch(userInput);
        userVideoSearch();
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <input placeholder="search for videos"
                    className="search"
                    onChange={handleSearch}
                >
                </input>
                {videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
}

export default VideoList
