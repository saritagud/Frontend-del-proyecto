import Nav  from "./nav"
import Footer from './footer';
import { useState } from "react";



function Chat() {

    return (
        <div>
            <Nav/>
                <section>
                    <h1>ChatUVM</h1>

                    <div>
                        <ul>

                        </ul>
                    </div>

                    <div>
                        <ul>

                        </ul>
                    </div>



                    <div>
                        <input type="text"></input>
                        <button></button>
                    </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Chat;