import { useMatch } from 'react-router';
import { CHANNEL } from '../../routes/consts';
import ChannelDataContainer from '../../containers/ChannelDataContainer';
import ChannelVideosContainer from '../../containers/ChannelVideosContainer';

const Channel = () => {
    const {params: { channelId }} = useMatch(`${CHANNEL}/:channelId`);

    return (
        <>
            <ChannelDataContainer channelId={channelId}/>
            <ChannelVideosContainer channelId={channelId}/>
        </>
    );
}

export default Channel;