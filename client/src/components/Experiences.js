import { Carousel } from "antd";
import msimg from '../utils/picturesAndIcons/msimg.jpeg'
import msimg2 from '../utils/picturesAndIcons/msimg2.jpg'
import virimg from '../utils/picturesAndIcons/virimg.jpg'
import gdscimg from '../utils/picturesAndIcons/gdscimg.jpg'

const Experiences = () => {
    return (
        <div id="experiences">
            <Carousel autoplay='true'>
                <div className="carouselchild">
                    <h1> Microsoft  Support Engineer Intern</h1>
                    <p className="carouselp">
                        Worked with Microsoft products and technologies such as
                        Azure, Active Directory, M365, Windows and more. Worked on an application prototype with OpenAI APIs.
                         Got my azure (az900) certification.Connected with supportive group of people.
                    </p>
                    <img src={msimg} className="imageCarousel" />
                </div>
                <div className="carouselchild">
                    <h1> Virtusa Mobile Development Intern </h1>
                    <p className="carouselp">
                        I Develpoed an application with microservice architecture. I worked with 
                        technologies such as ReactJS, node.js, Express, MongoDB, ReactNative. 
                        Participated in the JatayuSeason 2 hackathon and secured second place pan India.
                    </p>
                    <img src={virimg} className="imageCarousel" />
                </div>
                <div className="carouselchild">
                    <h1> GDSC SNU </h1>
                    <p className="carouselp">
                        Loved learning and growing with my GDCS community. There was a lot of healthy 
                        competition and I made a lot of friends who inspire
                        me to become a better version of myself. 
                    </p>
                    <img src={gdscimg} className="imageCarousel" />
                </div>
            </Carousel>
        </div>
    )
}

export default Experiences