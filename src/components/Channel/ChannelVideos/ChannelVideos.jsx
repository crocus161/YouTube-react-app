import { useEffect } from 'react';
import CardsBoxContainer from '../../../containers/CardsBoxContainer';

const ChannelVideos = ({ channelId, setChannelVideos, setMoreChannelVideos, items, totalResults, loading }) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            const playlistId = channelId.replace(/UC/, 'UU');
            setChannelVideos(playlistId);
        }

        return () => cleanupFunction = true;
    }, [channelId, setChannelVideos])


    return (
        <CardsBoxContainer
            fetchMoreData={setMoreChannelVideos}
            totalResults={totalResults}
            listLength={items.length}
            title='Channel video'
            loading={loading}
            vertical={true}
            small={false}
            items={items}
        />
    );
}

export default ChannelVideos;