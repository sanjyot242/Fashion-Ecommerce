import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
function Login() {
  return (
    <section>
      <div className='px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-24'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl'>
              Collaborating on single-page projects,
              <span className='text-gray-600'>from any location</span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500 text-pretty'>
              A rapid approach to collaborate in staging and provisional
              settings.
            </p>
          </div>
          <div className='p-2 border bg-gray-50 rounded-3xl'>
            <div className='p-10 border bg-white rounded-2xl '>
              <div>
                <button className='inline-flex items-center  justify-center w-full h-12 bg-gray-100 rounded-xl hover:bg-gray-400 gap-4   font-medium text-black'>
                  <FontAwesomeIcon icon={faGoogle} />
                  Sign in with google
                </button>
                <div className=' relative py-3'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-gray-300 border-t-2'></div>
                  </div>
                  <div className='relative flex justify-center'>
                    <span className='px-2 text-sm text-black bg-white'>
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
              <form action=''>
                <div className='space-y-3'>
                  <div>
                    <label
                      className='block mb-3 text-sm font-medium text-black '
                      htmlFor='name'>
                      First Name
                    </label>
                    <input
                      type='text'
                      placeholder='Username'
                      className='block w-full h-12 border rounded-xl my-2 px-2 py-2'
                    />
                  </div>
                  <div>
                    <label htmlFor='passsword' className='block'>
                      Passowrd
                    </label>
                    <input
                      type='password'
                      placeholder='Enter your password'
                      className='block w-full h-12 border rounded-xl my-2 px-2 py-2'
                    />
                  </div>
                  <button className='inline-flex items-center  justify-center w-full h-12 bg-gray-900 rounded-xl hover:bg-gray-700  font-medium text-white '>
                    Sign in
                  </button>
                </div>
              </form>
              <div className='mt-6'>
                <p className='flex mx-auto text-sm font-medium leading-tight text-center text-black'>
                  Not Registerd ?
                  <a className='ml-auto text-blue-500 hover:text-black'>
                    Sign Up now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
