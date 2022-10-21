import { CgSpinnerTwo } from "react-icons/cg";
import '../styles/Spinner.css';

function Spinner() {
    return (
        <div className='spinner'>
            <CgSpinnerTwo className={'spinning'} />
        </div>
    )
}

export { Spinner };