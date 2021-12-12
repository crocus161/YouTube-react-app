import CardsBoxContainer from '../../containers/CardsBoxContainer';

const Search = ({items, setMoreSearchResultData, totalResults, loading}) => {
    return (
        <CardsBoxContainer
            title={items.length ? 'Search result' : 'Type to search'}
            listLength={items.length}
            totalResults={totalResults}
            fetchMoreData={setMoreSearchResultData}
            loading={loading}
            items={items}
            vertical
        />
    );
}

export default Search;