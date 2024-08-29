import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/loginSlice';
const initState = {};
const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState({ ...initState });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value;
        setLoginParam({ ...loginParam });
    };
    const handleClickLogin = (e) => {
        dispatch(login(loginParam));
    };
};
