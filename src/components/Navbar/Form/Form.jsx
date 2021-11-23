import styles from './Form.module.scss'
import { createRef } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { useNavigate } from 'react-router';
import { SEARCH } from '../../../routes/consts';

const Form = ({searchValue, setSearchValue, setSearchResult}) => {

    const navigate = useNavigate();
    const searchInput = createRef();

    const clearSearchInput = e => {
        e.preventDefault();
        setSearchValue('');
        searchInput.current.focus();
    }

    const changeSearchInput = e => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!searchValue.trim()) return

        setSearchResult(searchValue);
        navigate(SEARCH);
    }

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${searchValue ? styles.active : ''}`}>
            
            <label className={styles.form__label} htmlFor='search-input'>Type to search</label>

            <input className={styles.form__input} id='search-input'
                type="text" autoComplete='off' ref={searchInput}
                value={searchValue} onChange={changeSearchInput} />

            {
                searchValue &&
                <>
                    <button onClick={clearSearchInput}
                        type='button'
                        className={`${styles.form__del} ${styles.form__btn}`}
                    >
                        ✕
                    </button>

                    <button
                        type='submit'
                        className={`${styles.form__search} ${styles.form__btn}`}
                    >
                        <SearchIcon />
                    </button>
                </>
            }

        </form>
    );
}

export default Form;