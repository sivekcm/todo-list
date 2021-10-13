import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({title}) => {
    return (
        <div className="position-fixed top-50 start-50">
            <h2 className='h2'>{title}</h2>
        </div>
    )
}

export default Header