import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BasicMenu = () => {
    const loginState = useSelector((state) => state.loginState);

    return (
        <nav id="navbar" className=" flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        {' '}
                        <Link to={'/'}>Main</Link>{' '}
                    </li>
                    <li className="pr-6 text-2xl">
                        {' '}
                        <Link to={'/about'}>About</Link>{' '}
                    </li>
                    {loginState.email ? ( //로그인한 사용자만 출력되는 메뉴
                        <>
                            <li className="pr-6 text-2xl">
                                {' '}
                                <Link to={'/todo'}>Todo</Link>{' '}
                            </li>
                        </>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                <div className="text-white text-sm m-1 rounded">Login</div>
            </div>
        </nav>
    );
};
export default BasicMenu;
