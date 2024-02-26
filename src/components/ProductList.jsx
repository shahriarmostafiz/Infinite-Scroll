import React, { useEffect, useRef, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef(null)
    useEffect(() => {
        const observing = (items) => {
            const item = items[0]
            if (item.isIntersecting) { console.log("loader is visible") }
            else {
                console.log("loader is not visible");
            }
        }
        const observer = new IntersectionObserver(observing)
        if (observer && loaderRef.current) {
            observer.observe(loaderRef.current)

        }
        return () => {
            if (observer) observer.disconnect()
        }

    }, [])

    return (
        <div>
            <div>Product Lists </div>
            {/* load more section  */}
            <div ref={loaderRef} className='w-fit animate-pulse mt-[1200px] mb-80 text-cyan-500'>
                Loading more data ..
            </div>
        </div>
    );
};

export default ProductList;