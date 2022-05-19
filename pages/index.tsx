import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title font-extrabold'>Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary font-light'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
