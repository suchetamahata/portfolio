import { Call, Email, LinkedIn } from "@material-ui/icons"
import imagebottom from '../utils/picturesAndIcons/imagebottom.svg'
import { LinkedIn, Email, Call } from "@material-ui/icons"

const Contact = () => {
    return (
        <div id='contact' className='contactdiv'>
            <div><hr></hr></div>
            <div>
            <div >
                <ul className="contactul">
                    <li><a href="https://www.linkedin.com/in/sucheta-mahata/" className='linkheader'>Linkedin: Sucheta Mahata</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nosuchetamahatano@gmail.com" className='linkheader'>Gmail: nosuchetamahatano@gmail.com</a></li>
                    <li>Phone Number : 7001431367</li>
                </ul>
            </div>
            <div >
                <ul className="contactul second">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Contact