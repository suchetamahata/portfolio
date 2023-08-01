import image2 from '../utils/picturesAndIcons/bottomrightimage.svg'
import sucheta from '../utils/picturesAndIcons/sucheta.jpg'

const Body = () => {
    return (
        <div className='bodydiv'>
            <div>
                <h1>
                    MERN stack Developer
                    <br />
                    Based in India
                    <br />
                    <button className='resumebtn'>Download Resume</button>
                </h1>
                <p className='introp'>Hi, I am Sucheta Mahata, a a 22 years old Computer Science Engineer. I am a full stack web developer.
                    <br />I love developing and creating websites such as this one. I also like exploring the Cloud and 
                    <br/> Apart from my tech life, I am an artist and spend my time drawing/sketching/designing.
                </p>
                <img src={sucheta} className='suchetaImg'/>
            </div>

            <img src={image2} className='image2'></img>
        </div>
    )
}

export default Body