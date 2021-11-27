import { connect } from 'react-redux'
import { Navigate } from 'react-router'
import { ERROR } from '../../routes/consts'
import { setError } from '../../store/Error/actions'

const errorHoc = (Component) => {

    const RedirectContainer = ({ error, setError, ...props }) => {

        if(error) {
            setError(false);
            return <Navigate to={ERROR} />
        }

        return <Component {...props}/>
    }

    const mapStateToProps = (state) => ({
        error: state.error.error
    });

    return connect(mapStateToProps, {setError})(RedirectContainer);
}

export default errorHoc;
