import { useState } from 'react'
import formImage from '../utils/picturesAndIcons/formIcon.svg'

const Message = () => {

    const [message, setMessage] = useState({ name: '', email: '', subject: '', messagetext: '' })

    const nameChangeHandle = (event) => {
        setMessage({ ...message, name: event.target.value })
    }
    const emailChangeHandle = (event) => {
        setMessage({ ...message, email: event.target.value })
    }
    const subjectChangeHandle = (event) => {
        setMessage({ ...message, subject: event.target.value })
    }
    const messageChangeHandle = (event) => {
        setMessage({ ...message, messagetext: event.target.value })
    }

    const buttonClickHandle = async () => {
        try {
            const response = await fetch("http://localhost:8080", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className='messagediv'>
            <div >
                <h1>Get in touch</h1>
                <p> I would love to connect with you. Be it a job offer or <br />
                    just conversations on common interests, don't hesitate.<br />
                    You can fill out this form if you want me to reach out to you.<br /></p>
                <img src={formImage} className='imgform'></img>
            </div>
            <div>
                <input placeholder='Name' className='inputBox1' onChange={nameChangeHandle} />
                <input placeholder='Email' className='inputBox1' onChange={emailChangeHandle} />
                <input placeholder='Subject' className='inputBox1' onChange={subjectChangeHandle} />
                <input placeholder='Your Message' className='inputBox1 inputBox2' onChange={messageChangeHandle} />
                <button className='buttonform' onClick={buttonClickHandle}> Send Message </button>
            </div>
        </div>
    )
}

export default Message