export default function Home() {
  return (
    <div className='md:flex bg-white rounded-lg p-24 justify-center'>
      <img
        className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
        src='https://avatars.githubusercontent.com/king-11'
      />
      <div className='text-center md:text-left'>
        <h2 className='text-lg'>Lakshya Singh</h2>
        <div className='text-purple-500'>JavaScript developer</div>
        <div className='text-gray-600'>Github: @king-11</div>
        <div className='text-gray-600'>InstaGram: @cryptic-sniper</div>
      </div>
    </div>
  );
}