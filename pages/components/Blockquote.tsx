type Props = {
    text: string;
    textAction: string;
};

const Blockquote = ({ text, textAction }: Props) => {
    return (
        <blockquote className='flex text-lg sm:text-2xl mt-14 mb-4 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
            <p className='mr-2'>{text}</p>
            <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                <span className='relative text-gray-100 uppercase'>{textAction}</span>
            </p>
        </blockquote>
    );
};

export default Blockquote;
