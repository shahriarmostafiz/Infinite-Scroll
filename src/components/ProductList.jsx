import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
const perPageData = 20;
const ProductList = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef(null)
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://dummyjson.com/products?limit=${perPageData}&skip=${perPageData * page}`)
            const data = await res.json()
            console.log(data.products);
            if (data.products.length === 0) {
                setHasMore(false)
            } else {
                setProducts(prev => [...prev, ...data.products])
                setPage(prev => prev + 1)
            }

        }
        const observing = (items) => {
            const item = items[0]
            if (item.isIntersecting && hasMore) {
                fetchData()
            }
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

    }, [hasMore, page])

    return (
        <div>
            <div>Product Lists </div>
            {/* load more section  */}
            {/* <h1></h1> */}
            <div className='grid grid-cols-4 gap-4 px-5'>
                {
                    products?.map(item => <ProductCard key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} description={item.description} />)
                }
            </div>
            {
                hasMore ? <div ref={loaderRef} className='w-fit animate-pulse mx-auto text-cyan-500'>
                    loading
                </div> : <div className='text-center'>All products fetched </div>
            }
        </div>
    );
};

export default ProductList;