import {FaTelegramPlane,FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";

function Footer(){
    return(
        <div>
            <footer className="flex items-center text-textColor justify-between bg-secundaryColor  h-14 md:text-2xl lg:h-20 w-full 2xl:text-3xl">
                <p className="font-Urbanist text-1xl px-2 text-left flex items-center">Copyright © 2023 MomoyBOT. </p>
                <div className=" flex text-2xl md:text-3xl 2xl:text-4xl">
                    <a href="https://github.com/st1nkyd00d/MomoyBOT-Chatbot-para-los-estudiantes-de-la-UVM-"><FaGithubSquare className="mx-2 hover:fill-[#fff]"/></a>
                    <a href="https://www.instagram.com/univalledelmomboy/"><FaInstagram className="mx-2 hover:fill-[#fff]"/></a>
                    <a href="https://www.facebook.com/univalledelmomboy"><FaFacebook  className="mx-2 hover:fill-[#fff]"/></a>`
                </div>
                </footer>
        </div>
    );
}

export default Footer;