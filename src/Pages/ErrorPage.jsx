import { useNavigate } from "react-router";
import  err  from "../assets/error-404.png";

const ErrorPage = () => {

    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-7 py-7 items-center justify-center'>
            <div>
                <img src={err} alt="" />
            </div>
            <div className='text-[rgba(0,25,49,1)] font-inter text-[2rem] font-bold leading-[100%] text-left'>Oops, page not found!</div>
            <div className='text-[rgba(0,25,49,1)] font-inter text-[1.5rem] font-normal leading-[1.5rem] text-left  opacity-[0.8]'>The page you are looking for is not available.</div>
            <div>
                <button onClick={() => navigate(`/`)} className="rounded-[0.4rem] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-row justify-center items-center gap-[1rem] px-[1.6rem] py-[1.2rem]">Go Back!</button>
            </div>
        </div>
    );
};

export default ErrorPage;