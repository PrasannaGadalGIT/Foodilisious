import Link from 'next/link';

const Choose = () => {
    return(
        <>
        <button><Link href="/register/registerAsUser">Sign Up to order</Link></button>
        <button><Link href="/register/registerAsRestaurant">Sign Up as resturant</Link></button>
        </>
        
        
    )
}

export default Choose