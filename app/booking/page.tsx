'use client'
import { FormEvent, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Form() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // State variables for form status
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [option1, setOption1] = useState(false);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName,
      secondName,
      email,
      company,
      phone,
      message,
      agreed: true,
    };

    try {
      const response = await axios.post('http://localhost:4000/user', formData);
      console.log('Form submitted successfully:', response.data);
      setLoading(false);
      setSuccess(true);

    
    window.location.href = ('http://localhost:3001');
    } catch (error) {
      console.error('Failed to submit the contact form:', error);
      setLoading(false);
      setError('Failed to submit the contact form');
    }
  }; 
    
  return (
    <div>   
     <div className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Consultation</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Fill in our form !
        </p>
      </div>
      <form 
      action="#" 
      method="POST" 
      className="max-w-xl mx-auto mt-16 sm:mt-20"
      onSubmit={handleSubmit} // Attach the submit handler to the main form
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
                type="text"
                minLength={3}
                maxLength={100}
                required
                name="firstname"
                id="firstname"
                autoComplete="given-name"
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
              value={secondName}
              onChange={e => setSecondName(e.target.value)}
                type="text"
                minLength={3}
                maxLength={100}
                required
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
              value={company}
              onChange={e => setCompany(e.target.value)}
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
              value={email}
              onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phonenumber" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
            </div>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full py-0 pl-4 text-gray-400 bg-transparent border-0 rounded-md bg-none pr-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="absolute top-0 w-5 h-full text-gray-400 pointer-events-none right-3"
                  aria-hidden="true"
                />
              </div>
              <input
               onChange={(e) => setPhone(e.target.value)} value={phone}
                type="tel"
                name="phonenumber"
                id="phonenumber"
                autoComplete="tel"
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
            <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
                name="message"
                id="message"
                rows={4}
                style={{ backgroundColor: 'white' }} // Use an object with CSS properties and values
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex items-center h-6">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 disabled:bg-gray-400 disabled:text-gray-100 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>  
    </div>
  
  )
}

function setLoading(this: any, loading: boolean) {
  this.setState({
    loading,
  });
}