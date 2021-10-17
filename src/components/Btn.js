import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
const Btn = ({ onCreateListClick, showCreate }) => {
    return (
        <>
            <Button style={{display:'inline-block',marginInlineEnd: '30%', float:'right'}} className='btn' variant={showCreate ? 'danger' : 'success'} onClick={ () => onCreateListClick() }>
                {showCreate ? 'Cancel' : 'New'}
            </Button>
        </>
    )
}

export default Btn
