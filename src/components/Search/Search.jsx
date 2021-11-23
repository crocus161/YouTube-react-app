import CardsBoxContainer from '../../containers/CardsBoxContainer';
import VideoCard from '../../common/VideoCard/VideoCard';

const Search = ({searchResultList, setMoreSearchResultData}) => {
    return (
        <CardsBoxContainer
            title='Search result'
            listLength={searchResultList.length}
            fetchMoreData={setMoreSearchResultData}
        >
            {searchResultList.map((item, i) => (
                <VideoCard key={item.id.videoId + item.etag + i} vertical={true} data={item} />
            ))}
        </CardsBoxContainer>
    );
}

export default Search;