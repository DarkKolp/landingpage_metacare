import React, { useState, useEffect } from "react"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main>
      <nav className="w-full h-[150px] 
      bg-[#D6E9F8]
      shadow
      flex items-center
      ">
        <div className='pl-[5%]'>
          <img src="/metacareLogo.png" alt="Metacare Logo" width={180} height={180}/>
        </div>
        <div className='w-full flex justify-end'>
          <a href="https://www.crotaluslabs.com/" 
          className='text-gray-600
          pr-[15%]
          text-xl'>
            About Us
          </a>
        </div>
      </nav>
      
      <div className='w-full flex flex-row mb-[100px]'>
        
        <div className='w-full flex flex-col mt-[120px] pl-[5%]'>
            <h2 className='text-6xl text-[#091562]'>
                    A Blockchain-based Healthcare <br></br>Data Management Solution.
            </h2>
            
            <h2 className='text-2xl text-[#091562]
            mt-[40px]'>
            <span class="type-info"></span>
            </h2>

            <div className="flex justify-start">
              <button type="button"
              className="h-[50px] w-[200px] mt-[50px] rounded-lg
              text-xl text-white font-sans
              bg-gradient-to-r from-[#2F80ED] to-[#B2FFDA] 
              shadow-lg shadow-gray-400">
                Fill the form
              </button>
            </div>

            <div className="flex justify-center mt-[80px] text-xl text-[#091562]">
              <h2>
                We're trusted by the best in business
              </h2>
            </div>

            <div className="flex flex-row justify-center mt-[50px]">
              <div>
                <img src="/asus-logo.png" alt="" width={150}/>
              </div>
            </div>

        </div>

        <div className='w-2/3 h-fit flex justify-end mt-[50px] pr-[10%]'>
          <img src="/blue-men.jpg" alt="Blue man with open arms" width={321} height={573}/>
        </div>
      </div>


      
      <footer className="h-[100px] flex flex-col justify-center items-center
      border-t-[2px] border-t-[#eaeaea]">
				<a href="https://www.crotaluslabs.com/" target="_blank" rel="noopener noreferrer"
        className="text-[#0093ff] font-bold 
        ">
					Powered by Crotalus Labs&reg;
				</a>
			</footer>
    
    </main>

    
  )
}
