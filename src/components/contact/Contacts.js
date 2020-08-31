import React, { useState } from 'react'
import './Contacts.css'
import emailjs from 'emailjs-com';
export default function Contacts() {
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const sms = e.target.value
        setMsg(sms)
    }
    const handleChangeName = (e) => {
        const name = e.target.value
        setName(name)
    }
    const handleChangeMail = (e) => {
        const mail = e.target.value
        setMail(mail)
    }

    //https://blog.mailtrap.io/react-send-email/
    //https://www.emailjs.com/docs/sdk/installation/
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const email = mail.email
    //     const mailChimp = await fetch('/.netlify/functions/mailchimp/',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({ email })
    //         })
    //     const res = await mailChimp.json()
    //     console.log(res);
    //     const msg = setMsg(res.msg)
    // }
    function sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
            setMsg('')
            setMail('')
            setName('')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const templateId = 'testemail';
        sendFeedback(templateId, { message_html: msg, from_name: name, reply_to: mail })
    }

    return (
        <div className="containerHight" >
            <form className="containerForm">
                <h1>Contact</h1>
                {/* <label htmlFor="email"> Email :</label>
                <input id="email" type="email" value={mail.email} onChange={handleChange} /> */}
                {/* <button type="submit">Go</button> */}
                <div>
                    <label htmlFor="name">Votre Nom :</label>
                    <input type="text" id="name" onChange={handleChangeName} value={name} />
                </div>
                <div>
                    <label htmlFor="email">Votre Mail :</label>
                    <input type="text" id="email" onChange={handleChangeMail} value={mail} />
                </div>
                <textarea
                    id="test-mailing"
                    name="test-mailing"
                    onChange={handleChange}
                    placeholder="Post some lorem ipsum here"
                    value={msg}
                    style={{ width: '350px', height: '150px' }}
                />

                <div className='btn-container'>
                    <button type="submit" className="btn-send" onClick={handleSubmit} > boutton</button>
                </div>

            </form>
        </div >

    )
}
