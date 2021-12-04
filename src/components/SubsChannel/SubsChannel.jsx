import { useEffect } from 'react';
import CardsBoxContainer from '../../containers/CardsBoxContainer';

const SubsChannel = ({ setSubsChannel, setMoreSubsChannel, items, totalResults, loading }) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            setSubsChannel();
        }

        return () => cleanupFunction = true;
    }, [setSubsChannel])

    return (
        <CardsBoxContainer
            fetchMoreData={setMoreSubsChannel}
            totalResults={totalResults}
            listLength={items.length}
            title='Subscribes'
            loading={loading}
            vertical={false}
            small={false}
            items={items}
        />
    );
}

export default SubsChannel;