import React, { useState, useEffect } from "react"
import { Inter } from 'next/font/google'
import Head from 'next/head' 


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
      
      <main>
        <Head>
          <title>Metacare Health</title>
          <link rel="shortcut icon" href="./public/favicon.ico" />
        </Head>
        <nav className="w-full h-[120px] 
        
        flex items-center
        ">
          <div className='pl-[2%] pt-[1%]'>
            <img src="/metacareLogo.png" alt="Metacare Logo" width={150} height={150}/>
          </div>
          <div className='w-full flex justify-end items-center'>
            <a href="https://www.crotaluslabs.com/" 
            className='text-[#0093ff]
            pr-[3%]
            text-xl font-bold'>
              Documentation
            </a>
            <a href="https://www.crotaluslabs.com/" 
            className='text-[#0093ff]
            pr-[3%]
            text-xl font-bold'>
              About Us
            </a>
            <a href="https://www.crotaluslabs.com/" 
            className='text-[#0093ff]
            pr-[3%]
            text-xl font-bold'>
              Blog
            </a>
            <div className="
            pr-[3%]">
              <button className="h-[50px] w-[130px] rounded-lg
                  text-l text-white font-sans
                  bg-[#0093ff]">
                    Contact
              </button>
            </div>
          </div>
        </nav>
        <div className="w-full h-[3px] bg-[#091562]"></div>
        
        <div className='w-full flex flex-row mb-[40px]'>
          
          <div className='w-3/5 flex flex-col mt-[40px] pl-[5%]'>
              <div className="w-full ml-[15%]">
                <img src="/metacareLogo.png" alt="Metacare Logo" width={250} height={250}/>
              </div>
              <h2 className='text-5xl text-[#091562] font-bold mt-[30px]'>
                      Your Personal Pathway to<br></br>your Healtier Future.
              </h2>
              
              <h2 className='text-2xl text-[#091562] font-bold
              mt-[70px]'>
              Unleash the power of your personal Data Digital Twin.
              </h2>
              <p className=" text-[#091562] text-xl
              mt-[20px]">Join our waitlist and be the first to experience a new era of healthcare</p>

              <div className="flex justify-start ml-[30px] mt-[60px]">
                <input type="email" placeholder="Enter your email"
                className="h-[50px] w-[300px] rounded-lg border border-gray-400/75 mr-5 pl-4" />
                <button type="button"
                className="h-[50px] w-[200px] rounded-lg
                text-xl text-white font-sans
                bg-[#0093ff] 
                shadow-lg shadow-gray-400">
                  Submit
                </button>
              </div>

              

          </div>

          <div className='xl:absolute  top-[123px] right-0'>
            <img src="/bgimg.png" alt="Blue man with open arms" width={643} height={857}/>
          </div>
        </div>


        
        <footer className="h-[100px] flex flex-col justify-center items-center">
          <a href="https://www.crotaluslabs.com/" target="_blank" rel="noopener noreferrer"
          className="text-[#0093ff] font-bold 
          ">
            Powered by Crotalus Labs&reg;
          </a>
        </footer>
      
      </main>
    
  )
}
