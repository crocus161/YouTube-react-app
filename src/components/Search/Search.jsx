import CardsBoxContainer from '../../containers/CardsBoxContainer';

const Search = ({items, setMoreSearchResultData, totalResults, loading}) => {
    return (
        <CardsBoxContainer
            title={items.length ? 'Search result' : 'Type to search'}
            listLength={items.length}
            totalResults={totalResults}
            fetchMoreData={setMoreSearchResultData}
            small={false}
            loading={loading}
            items={items}
            vertical={true}
        />
    );
}

export default Search;