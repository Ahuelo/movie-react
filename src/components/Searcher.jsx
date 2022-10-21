import '../styles/Searcher.css';
import { ImSearch } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';


function Searcher () {
    const query = useQuery();
    const search = query.get('search');

    //unimos el usestate al input y va a cambiar al dar enter
    const [searchText, setSearchText] = useState('');
    //es de react router añade información a la ruta
    const history = useHistory();

    useEffect(() => {
        /* los state no pueden ser null, por eso usamos el '' en la linea siguiente */
        setSearchText(search || '');
    }, [search]);

    const handleSubmit = ( e ) => {
        /* Previene que la pagina se recargue */
        e.preventDefault();
        history.push(`/?search=${searchText}`);
    }
    return (
        <form 
            className={'searcherContainer'} 
            onSubmit={handleSubmit}
        >
        <div className={'searchBox'}>
            <input type="text" 
                className={'searchInput'} 
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                />
            <button type='submit' className={'searchButton'}>
                <ImSearch className={'searchIcon'}/>
            </button>
        </div>
        </form>
        
    )
};

export { Searcher };