import CardsBoxContainer from '../../containers/CardsBoxContainer';
import VideoCard from '../../common/VideoCard/VideoCard';
import VideoCardsSkeleton from '../../common/Skeletons/VideoCardSkeleton/VideoCardsSkeleton';

const Search = ({searchResultList, setMoreSearchResultData, totalResults, loading}) => {
    return (
        <CardsBoxContainer
            title='Search result'
            listLength={searchResultList.length}
            totalResults={totalResults}
            fetchMoreData={setMoreSearchResultData}
        >
            {loading
                ? [...Array(searchResultList.length || 24)].map((_, index) => (
                    <VideoCardsSkeleton key={index} vertical={true}/>
                ))
                : searchResultList.map((item, i) => (
                    <VideoCard key={item.id.videoId + item.etag + i} vertical={true} data={item} />
                ))
            }
        </CardsBoxContainer>
    );
}

export default Search;