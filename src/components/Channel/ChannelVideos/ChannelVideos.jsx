import { useEffect } from 'react';

const ChannelVideos = ({ channelId, setChannelVideos }) => {
    
    useEffect(() => {
        const playlistId = channelId.replace(/UC/, 'UU');
        setChannelVideos(playlistId);
    }, [channelId, setChannelVideos])


    return (
        <h1>Video</h1>
    );
}

export default ChannelVideos;