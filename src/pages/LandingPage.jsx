import { CatalogoPelis } from '../components/CatalogoPelis';
import { Searcher } from '../components/Searcher';
import { useQuery } from '../hooks/useQuery';

function LandingPage (){
    //es un truco para resetear los hooks al establecer una key
    //en el componente padre
    const query = useQuery();
    const search = query.get('search');

    return(
        <>
        <Searcher/>
        <CatalogoPelis key={search}/>
        </>
    )
};

export { LandingPage };