const productsRouter = () => {
    const Loading = <div>Loading....</div>;
    const ProductsList = lazy(() => import('../pages/products/ListPage'));
    return [
        {
            path: 'list',
            element: (
                <Suspense fallback={Loading}>
                    <ProductsList />
                </Suspense>
            ),
        },
        {
            path: '',
            element: <Navigate replace to="/products/list" />,
        },
        {
            path: 'add',
            element: (
                <Suspense fallback={Loading}>
                    <ProductsAdd />
                </Suspense>
            ),
        },
        {
            path: 'read/:pno',
            element: (
                <Suspense fallback={Loading}>
                    <ProductRead />
                </Suspense>
            ),
        },
    ];
};
export default productsRouter;
