import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
const Btn = ({ onCreateListClick, showCreate }) => {
    return (
        <div>
            <Button className='btn' variant={showCreate ? 'danger' : 'success'} onClick={ () => onCreateListClick() }>{showCreate ? 'Cancel' : 'New'}</Button>
        </div>
    )
}

export default Btn
