import ArrowUp from '@/components/icons/arrow-up'
import CustomDatePicker from '@/components/picker/DatePicker'
import CustomTimePicker from '@/components/picker/TimePicker'
import Link from 'next/link'
import React, { useState } from 'react'

const Events = () => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>('11:00');
  
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    
      const handleTimeChange = (time: string | null) => {
        setSelectedTime(time || ''); // Handle null values
      };

  return (
    <div className='w-full h-full bg-[#3F3849] shrink-0 flex sm:flex-col lg:flex-row '>
        <aside className=' bg-[#3F3849] rounded-r-2xl rounded-br-2xl w-[320px] py-8 lg:flex md:hidden sm:hidden flex-col justify-between'>
            <div className='flex flex-col gap-20'>
                <h1>Logo</h1>
                <div className='flex flex-col gap-12'>
                    <Link href='/'>Timeline</Link>
                    <Link href='/'>My People</Link>
                    <Link href='/'>Calendar</Link>
                    <Link href='/'>Settings</Link>
                </div>
            </div>
            <div>
                <Link href='/'>Logout</Link>
            </div>
        </aside>
        <div className='lg:pl-16 lg:pt-14 sm:p-8 lg:rounded-none sm:rounded-3xl lg:m-0 sm:m-4 sm:bg-white lg:bg-[#F7F6F8]'>
            <div className='flex items-center gap-6'>
                <ArrowUp />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none" className='lg:hidden sm:flex'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4285 19.5468C11.0628 19.9076 10.5669 20.1103 10.0498 20.1103C9.53278 20.1103 9.03689 19.9076 8.67122 19.5468L0.871397 11.849C0.505837 11.4881 0.300476 10.9987 0.300476 10.4884C0.300476 9.97806 0.505837 9.48865 0.871397 9.12776L8.67122 1.42987C9.03899 1.07931 9.53155 0.885336 10.0428 0.889721C10.5541 0.894106 11.0432 1.0965 11.4047 1.45331C11.7662 1.81013 11.9713 2.29281 11.9758 2.7974C11.9802 3.30199 11.7837 3.78811 11.4285 4.15107L6.95721 8.56389H21.7496C22.2667 8.56389 22.7627 8.76664 23.1284 9.12755C23.4941 9.48846 23.6995 9.97796 23.6995 10.4884C23.6995 10.9988 23.4941 11.4883 23.1284 11.8492C22.7627 12.2101 22.2667 12.4128 21.7496 12.4128H6.95721L11.4285 16.8256C11.794 17.1865 11.9994 17.6759 11.9994 18.1862C11.9994 18.6965 11.794 19.186 11.4285 19.5468Z" fill="#4D4855"/>
                </svg>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-2xl font-bold leading-10'>Create Event</h1>
                    <p className='sm:hidden lg:flex text-[#726E7C] font-normal text-base'>
                        Please ensure that you provide accurate information in this form to avoid any hiccups in this process.
                    </p>
                </div>
            </div>
            <div className="mt-8 inline-flex flex-col items-start gap-8 md:w-full sm:w-full lg:w-[591px] lg:ml-16">
                <div className='sm:hidden lg:flex items-center gap-6 w-full'>
                    <label className='text-lg font-semibold'>Event Name:</label>
                    <input type='text' placeholder='Enter the event name' className='flex flex-grow p-4 justify-center items-center gap-2 rounded-2xl border-2 border-black bg-[#F7F6F8]' />
                </div>
                <div className='flex lg:flex-row sm:flex-col items-start gap-6 w-full'>
                    <label className='text-lg font-semibold'>Event <br className='lg:block sm:hidden'/> Description:</label>
                    <textarea placeholder='Enter the event description' className='flex flex-grow sm:h-[122px] w-full h-44 p-4 justify-center items-center gap-2 rounded-2xl border-2 border-black sm:border-[#FFC6BC] bg-[#F7F6F8]' />
                </div>
                <div className='flex lg:flex-row sm:flex-col items-start gap-4'>
                    <h3 className='text-lg font-semibold'><span className='sm:hidden lg:inline-flex'>Event</span> Starts:</h3>
                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col justify-center items-start gap-1'>
                            <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                            <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange}/>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-1'>
                            <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                            <CustomTimePicker selectedTime={selectedTime} onChange={handleTimeChange} />
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row sm:flex-col items-start gap-4'>
                <h3 className='text-lg font-semibold'><span className='sm:hidden lg:inline-flex'>Event</span> Ends:</h3>
                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col justify-center items-start gap-1'>
                            <label htmlFor="date" className='font-medium text-base text-black opacity-70'>Date</label>
                            <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange}/>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-1'>
                            <label htmlFor="time" className='font-medium text-base text-black opacity-70'>Time</label>
                            <CustomTimePicker selectedTime={selectedTime} onChange={handleTimeChange} />
                        </div>    
                    </div>
                </div>
                <div className='sm:hidden lg:block'>
                    <div className='flex lg:flex-row sm:flex-col items-center gap-4'>
                        <div className='flex gap-2 items-center p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#FFC6BC]'>
                            <g clipPath="url(#clip0_14_6314)">
                                <path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z" stroke="#3F3849" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.657 16.6572L13.414 20.9002C13.039 21.2748 12.5306 21.4853 12.0005 21.4853C11.4704 21.4853 10.962 21.2748 10.587 20.9002L6.343 16.6572C5.22422 15.5384 4.46234 14.1129 4.15369 12.5611C3.84504 11.0092 4.00349 9.40071 4.60901 7.93893C5.21452 6.47714 6.2399 5.22774 7.55548 4.3487C8.87107 3.46967 10.4178 3.00049 12 3.00049C13.5822 3.00049 15.1289 3.46967 16.4445 4.3487C17.7601 5.22774 18.7855 6.47714 19.391 7.93893C19.9965 9.40071 20.155 11.0092 19.8463 12.5611C19.5377 14.1129 18.7758 15.5384 17.657 16.6572Z" stroke="#3F3849" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_14_6314">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <button className='lg:text-[#3F3849] sm:text-white text-base font-bold underline'>Add location</button>
                        </div>
                        <div className='flex gap-2 items-center p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_14_6320)">
                                <path d="M17.997 18H6.002L6 17.377C6 16.118 6.1 15.391 7.588 15.047C9.272 14.658 10.932 14.311 10.133 12.838C7.767 8.475 9.459 6 11.999 6C14.49 6 16.225 8.383 13.865 12.839C13.09 14.303 14.691 14.651 16.41 15.048C17.9 15.392 17.999 16.12 17.999 17.381L17.997 18ZM22.808 15.786C21.518 15.488 20.318 15.227 20.899 14.129C22.668 10.787 21.368 9 19.499 9C18.234 9 17.251 9.817 17.251 11.324C17.251 15.227 19.519 13.094 19.497 18H23.998L24 17.537C24 16.591 23.926 16.044 22.808 15.786ZM0.002 18H4.503C4.482 13.094 6.749 15.228 6.749 11.324C6.749 9.817 5.766 9 4.501 9C2.632 9 1.332 10.787 3.102 14.129C3.683 15.228 2.483 15.488 1.193 15.786C0.074 16.044 0 16.591 0 17.537L0.002 18Z" fill="#3F3849"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_14_6320">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <button className='lg:text-[#3F3849] sm:text-white text-base font-bold underline'>Select Groups</button>
                        </div>
                        
                    </div>
                    <button className='mt-9 inline-flex justify-center items-center gap-2 py-5 px-6 rounded-2xl bg-[#FFC6BC] text-black text-base font-bold text-center lg:w-[312px]'>
                        Create Event
                    </button>
                </div>
            </div>
        </div>

        <div className='lg:hidden sm:block mx-4 p-8'>
            <div className='flex lg:flex-row sm:flex-col lg:items-center gap-4'>
                <div className='flex gap-2 items-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#FFC6BC]'>
                    <g clip-path="url(#clip0_14_6314)">
                        <path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z" stroke="#FFC6BC" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.657 16.6572L13.414 20.9002C13.039 21.2748 12.5306 21.4853 12.0005 21.4853C11.4704 21.4853 10.962 21.2748 10.587 20.9002L6.343 16.6572C5.22422 15.5384 4.46234 14.1129 4.15369 12.5611C3.84504 11.0092 4.00349 9.40071 4.60901 7.93893C5.21452 6.47714 6.2399 5.22774 7.55548 4.3487C8.87107 3.46967 10.4178 3.00049 12 3.00049C13.5822 3.00049 15.1289 3.46967 16.4445 4.3487C17.7601 5.22774 18.7855 6.47714 19.391 7.93893C19.9965 9.40071 20.155 11.0092 19.8463 12.5611C19.5377 14.1129 18.7758 15.5384 17.657 16.6572Z" stroke="#FFC6BC" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_14_6314">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <button className='lg:text-[#3F3849] sm:text-white text-base font-bold underline'>Add location</button>
                </div>
                <div className='flex gap-2 items-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
                    <g clipPath="url(#clip0_14_6320)">
                        <path d="M17.997 18H6.002L6 17.377C6 16.118 6.1 15.391 7.588 15.047C9.272 14.658 10.932 14.311 10.133 12.838C7.767 8.475 9.459 6 11.999 6C14.49 6 16.225 8.383 13.865 12.839C13.09 14.303 14.691 14.651 16.41 15.048C17.9 15.392 17.999 16.12 17.999 17.381L17.997 18ZM22.808 15.786C21.518 15.488 20.318 15.227 20.899 14.129C22.668 10.787 21.368 9 19.499 9C18.234 9 17.251 9.817 17.251 11.324C17.251 15.227 19.519 13.094 19.497 18H23.998L24 17.537C24 16.591 23.926 16.044 22.808 15.786ZM0.002 18H4.503C4.482 13.094 6.749 15.228 6.749 11.324C6.749 9.817 5.766 9 4.501 9C2.632 9 1.332 10.787 3.102 14.129C3.683 15.228 2.483 15.488 1.193 15.786C0.074 16.044 0 16.591 0 17.537L0.002 18Z" fill="#FFC6BC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_14_6320">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <button className='lg:text-[#3F3849] sm:text-white text-base font-bold underline'>Select Groups</button>
                </div>
                
            </div>
            <button className='mt-9 inline-flex justify-center items-center gap-2 py-5 px-6 lg:rounded-2xl sm:rounded-full bg-[#FFC6BC] text-black text-base font-bold text-center lg:w-[312px] sm:w-full'>
                Create Event
            </button>
        </div>
    </div>
  )
}

export default Events;