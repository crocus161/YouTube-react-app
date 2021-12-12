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
            items={items}
        />
    );
}

export default SubsChannel;