import { ComponentType, lazy, Suspense } from 'react'
import Loader from './Loader'

type LazyLoadWrapperProps = {
    importFunc: () => Promise<{ default: ComponentType<any> }>;
};

export default function LazyLoaderWrapper({importFunc}: LazyLoadWrapperProps){
    const Component = lazy(importFunc);
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Component />
            </Suspense>
        </>
    )
}
