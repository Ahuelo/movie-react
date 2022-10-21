import '../styles/Searcher.css';
import { ImSearch } from 'react-icons/im';

function Searcher () {
    return (
        <form className={'searcherContainer'}>
        <div className={'searchBox'}>
            <input type="text" className={'searchInput'} />
            <button type='submit' className={'searchButton'}>
                <ImSearch className={'searchIcon'}/>
            </button>
        </div>
        </form>
        
    )
};

export { Searcher };