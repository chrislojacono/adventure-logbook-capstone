const Loader = () => (
  <div className='mt-5'>
    <div className='spinner-grow text-primary' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
    <div className='spinner-grow text-secondary' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
    <div className='spinner-grow text-success' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
    <div className='spinner-grow text-danger' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
    <div>Loading...</div>
  </div>
);

export default Loader;
