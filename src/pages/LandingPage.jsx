import { CatalogoPelis } from '../components/CatalogoPelis';
import { Searcher } from '../components/Searcher';

function LandingPage (){
    return(
        <>
        <Searcher/>
        <CatalogoPelis/>
        </>
    )
};

export { LandingPage };