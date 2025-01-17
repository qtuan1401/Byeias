import './styles/AboutUs.css'
import Blank from './headshots/blank-profile-picture-973460_1280.webp'
import Sam from './headshots/sam_headshot.png'
import Aidan from './headshots/aidan.png'
import Chrisvin from './headshots/chrisvin.png'
import Ethan from './headshots/ethan.png'
import Theo from './headshots/theo.png'
import Michael from './headshots/michael.png'

const AboutUsPage = () => {
    return (
        <div className="aboutUsDisplay">
            <div className="aboutUsHeader">
                About Us 
            </div>
            <div className="aboutUsTextDisplayContainer">
                <div className="aboutUsTextDisplay">
                    <div className="aboutUsBodyTitle"> Our Story </div>
                    <br/>
                        <p> Sway was founded in 2022 by a group of University students 
                        who originally came together with the purpose of creating 
                        an app to complete the requirements for their class. 
                        However, with the current war between Russia and Ukraine 
                        taking place we as a collective agreed that we should aim 
                        to create something that can benefit everyone during these 
                        trying times. Sway was born to help the average person 
                        identify any political biases that may occur in the media, 
                        and upon doing research into bias filters our team noticed 
                        that there were other filters that were not easily 
                        available to the public like a gender filter.</p>
                        
                        <br/>
                        <div className="aboutUsBodyTitle"> Our Target Audience </div>
                        <br/>
                        <p>Our target audience for the Sway app is anyone receiving news
                        about the current war or politics from public outlets and want to ensure the
                        information their receiving isn’t bias in any way.</p>
                      

                        <div className="aboutUsBodyTitle"> Our Team </div>
                        <br/>
                        <div className="ourTeamContainer">
                            <div className="row">
                                <div className="column">
                                    <div className="card">
                                        <img src={Chrisvin} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Chrisvin Joseph</h2>
                                            <p className="title">Project Leader - Front End Engineer</p>
                                            <p>Hello, I'm Chris. I am doing a Bachelor of Computer Science degree with a major in Cyber security and Digital Systems security. I enjoy gaming, hiking, coding and playing my guitar. I hope that one day, I can use my knowledge to contribute in some way to space exploration.</p>
                                            <p>josephchrisvin@gmail.com</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("josephchrisvin@gmail.com")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <img src={Sam} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Sam Hobson</h2>
                                            <p className="title">ML Engineer - Back End Designer</p>
                                            <p>Hi! My name is Sam and I am about to complete a Bachelor of Computer Science, majoring in Cyber Security. I love playing games, skiing, astronomy and F1 racing. I plan on using my passion for Cyber Security to help protect computer systems in the future!</p>
                                            <p className="samEmail">sam.hobson2535@gmail.com</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("sam.hobson2535@gmail.com")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <img src={Ethan} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Ethan Moore</h2>
                                            <p className="title">Project Marketing Lead</p>
                                            <p>Hey, I'm Ethan! I'm in my final year of University doing a Bachelor of Computer Science and majoring in Cyber Security. I'm interested in playing video games, listening to music, wrestling and big history! I'm hoping to effectively contribute to the Cyber Security Industry using my knowledge.</p>
                                            <p>ecm628@gmail.com</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("ecm628@gmail.com")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <img src={Michael} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Quoc Duong Nquyen</h2>
                                            <p className="title">Head of Documentation</p>
                                            <p>Hey I’m Michael. I’m in my final semester of Bachelor of Computer Science with a major in Big Data. I love racing games and motorsports and enjoy a good book. I’m hoping to apply my data skills acquired from uni to the healthcare and medical industry.</p>
                                            <p className="michealEmail">duongnq2k1@gmail.com</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("duongnq2k1@gmail.com")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <img src={Aidan} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Aidan Galovic</h2>
                                            <p className="title">Front End Designer</p>
                                            <p>Hi, my name is Aidan and I am currently completing my final year of my Bachelor of Computer Science (Cyber Security) degree. I really enjoying getting outdoors and playing sports, I also love coding little games in my spare time. </p>
                                            <p>ajg378@uowmail.edu.au</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("ajg378@uowmail.edu.au")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <img src={Theo} alt="Dev" width="100%"/>
                                        <div className="container">
                                            <h2>Quoc Tuan Nguyen</h2>
                                            <p className="title">Front End Designer</p>
                                            <p>Hey, I'm Tuan! I'm in my final year of Bachelor of Computer Science and majoring in Software Engineering. I'm interested in coding, travelling and sports. I hope I can use my knowledge to create good software applications.</p>
                                            <p className="theoEmail">nguyenquoctuannk@gmail.com</p>
                                            <p><button className="button" onClick={() => {navigator.clipboard.writeText("nguyenquoctuannk@gmail.com")}}>Copy Email</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <br/>  
        </div>

    )
}

export default AboutUsPage;