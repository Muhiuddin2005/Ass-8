import React from 'react';
import mob from '../assets/hero.png'
import app from '../assets/fi_5977575.png'
import play from '../assets/fi_16076057.png'

const Header = () => {
    return (
        <div className="flex flex-col justify-start items-center gap-[2.5rem] pt-[5rem] px-[5rem]">
            <div className="flex flex-col justify-start items-center gap-[2.5rem]">
                <div className="font-inter text-[4.5rem] font-bold leading-[5.25rem] tracking-[0%] text-center capitalize opacity-[0.9]">We Build
                    <span className="capitalize text-[4.5rem] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"> Productive </span>Apps
                </div>
                <div className="text-[rgba(98,115,130,1)] font-inter text-[1.25rem] font-normal leading-[2rem] tracking-[0%] text-center">
                    At HERO.IO , we craft innovative apps designed to make <br /> everyday life simpler, smarter, and more exciting.Our goal is to <br /> turn your ideas into digital experiences that truly make an impact.
                </div>
                <div className='flex'>
                    <a target="_blank" href='https://play.google.com/store/apps?hl=en' className="cursor-pointer box-border border border-[rgba(210,210,210,1)] rounded-[0.25rem] flex flex-row justify-center items-center gap-[0.625rem] px-[1.5rem] py-[0.75rem] mr-2"
                    >
                        <div><img src={play} alt="" /></div>
                        <div>Google Play</div>
                    </a>
                    <a target="_blank" href='https://www.apple.com/app-store/' className="cursor-pointer box-border border border-[rgba(210,210,210,1)] rounded-[0.25rem] flex flex-row justify-center items-center gap-[0.625rem] px-[1.5rem] py-[0.75rem] ml-2"
                    >
                        <div><img src={app}/></div>
                        <div>App Store</div>
                    </a>

                </div>
                <div className="">
                    <img src={mob} alt="" />
                </div>
                <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-start items-center gap-[2.5rem] p-[5rem]">
                    <div className="text-[rgba(255,255,255,1)] font-inter text-[3rem] font-bold leading-[100%] tracking-[0%] text-center capitalize">
                        Trusted by Millions, Built for You
                    </div>
                    <div className="w-[90rem] h-[9.5rem] flex flex-row justify-center items-center gap-[1.5rem]">
                        <div className="flex flex-col justify-start items-center gap-[1rem]"
                        >
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >Downloads</div>
                            <div className="text-[rgba(255,255,255,1)] font-inter text-[4rem] font-extrabold leading-[4.5rem] tracking-[0%] text-center capitalize w-[12.625rem] h-[4.5rem]"
                            >26M</div>
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >More than last month</div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-[1rem]"
                        >
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >Downloads</div>
                            <div className="text-[rgba(255,255,255,1)] font-inter text-[4rem] font-extrabold leading-[4.5rem] tracking-[0%] text-center capitalize w-[12.625rem] h-[4.5rem]"
                            >26M</div>
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >More than last month</div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-[1rem]"
                        >
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >Downloads</div>
                            <div className="text-[rgba(255,255,255,1)] font-inter text-[4rem] font-extrabold leading-[4.5rem] tracking-[0%] text-center capitalize w-[12.625rem] h-[4.5rem]"
                            >26M</div>
                            <div className="opacity-[0.8] text-[rgba(255,255,255,1)] font-inter text-[1rem] font-normal leading-[1.5rem] tracking-[0%] text-center capitalize"
                            >More than last month</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;