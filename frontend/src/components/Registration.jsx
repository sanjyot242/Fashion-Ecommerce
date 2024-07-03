import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const schema = yup.object({
  first_name: yup.string().required('First name is a required field'),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(18).required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords dont match')
    .required(),
  marketing_accept: yup
    .boolean()
    .oneOf([true], 'Please accept terms and condition')
    .required(),
});

function Registration() {
  const { user, token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (user || token) {
      navigate('/');
    }
  }, [user, error, navigate, dispatch]);
  return (
    <section>
      <div className='lg:grid lg:grid-cols-12 lg:min-h-[90vh] '>
        <section className='relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6'>
          <img
            src='https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            className='absolute inset-0 h-full w-full object-cover opacity-80'
          />
          <div className='lg:relative lg:block lg:p-12'>
            <h2 className='text-white font-bold text-4xl  '>
              Welcome to Prototype
            </h2>
            <p className='mt-4 font-medium leading-relaxed text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>
        <main className='flex items-center justify-center  sm:px-12 lg:col-span-7  xl:col-span-6'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-8 grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='FirstName'
                className='block text-sm font-medium text-gray-700'>
                First Name
              </label>

              <input
                {...register('first_name')}
                type='text'
                id='FirstName'
                name='first_name'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.first_name?.message}
              </p>
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='LastName'
                className='block text-sm font-medium text-gray-700'>
                Last Name
              </label>

              <input
                {...register('last_name')}
                type='text'
                id='LastName'
                name='last_name'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.last_name?.message}
              </p>
            </div>

            <div className='col-span-6'>
              <label
                htmlFor='Email'
                className='block text-sm font-medium text-gray-700'>
                {' '}
                Email{' '}
              </label>

              <input
                {...register('email')}
                type='email'
                id='Email'
                name='email'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.email?.message}
              </p>
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='Password'
                className='block text-sm font-medium text-gray-700'>
                {' '}
                Password{' '}
              </label>

              <input
                {...register('password')}
                type='password'
                id='Password'
                name='password'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.password?.message}
              </p>
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='PasswordConfirmation'
                className='block text-sm font-medium text-gray-700'>
                Password Confirmation
              </label>

              <input
                {...register('password_confirmation')}
                type='password'
                id='PasswordConfirmation'
                name='password_confirmation'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.password_confirmation?.message}
              </p>
            </div>

            <div className='col-span-6'>
              <label htmlFor='MarketingAccept' className='flex gap-4'>
                <input
                  {...register('marketing_accept')}
                  type='checkbox'
                  id='MarketingAccept'
                  name='marketing_accept'
                  className='size-5 rounded-md border-gray-200 bg-white shadow-sm'
                />

                <span className='text-sm text-gray-700'>
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
              <p className='m-1 block text-sm font-thin text-red-700'>
                {errors.marketing_accept?.message}
              </p>
            </div>

            <div className='col-span-6'>
              <p className='text-sm text-gray-500'>
                By creating an account, you agree to our
                <a href='#' className='text-gray-700 underline'>
                  {' '}
                  terms and conditions{' '}
                </a>
                and
                <a href='#' className='text-gray-700 underline'>
                  privacy policy
                </a>
                .
              </p>
            </div>

            <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
              <button
                disabled={isSubmitting}
                className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
                {isSubmitting ? 'Loading' : 'Create an account'}
              </button>

              <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                Already have an account?
                <Link to='/login' className='text-gray-700 underline'>
                  Log in
                </Link>
                .
              </p>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}

export default Registration;
