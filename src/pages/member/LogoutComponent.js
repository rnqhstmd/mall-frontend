import { useDispatch } from 'react-redux';
import { logout } from '../../slices/loginSlice';
const LogoutComponent = () => {
    const dispatch = useDispatch();
    const handleClickLogout = () => {
        dispatch(logout());
    };
};
