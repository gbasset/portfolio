import React, { useState, useEffect, useContext } from 'react'
import './Contacts.css'
import emailjs from 'emailjs-com';
import { Context } from '../../Context/Context'
export default function Contacts() {
    const {
        locationUrl,
        setLocationUrl
    } = useContext(Context)
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')
    const [name, setName] = useState('')
    const [ok, setok] = useState(false)

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
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    useEffect(() => {
        document.documentElement.scrollTop = 0
        setLocationUrl(window.location.href)
    }, [])

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
            setok(true)
            const action = () => {
                setMsg('')
                setMail('')
                setName('')
                setok(false)
            }
            setTimeout(() => action(), 3000)
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
            <form className="form-control">
                <h1 className="title-contact">Contactez moi</h1>
                {/* <label htmlFor="email"> Email :</label>
            <input id="email" type="email" value={mail.email} onChange={handleChange} /> */}
                {/* <button type="submit">Go</button> */}

                <label htmlFor="name">Votre Nom </label>
                <input type="text" id="name" onChange={handleChangeName} value={name} placeholder="Votre Nom" />

                <label htmlFor="email">Votre Mail </label>
                <input type="text" id="email" onChange={handleChangeMail} value={mail} placeholder="Votre Mail" />


                <textarea
                    id="test-mailing"
                    name="test-mailing"
                    onChange={handleChange}
                    placeholder="Votre message ..."
                    value={msg}

                />
                <div className='btn-container'>
                    {
                        ok &&
                        <div>
                            <p style={{ color: 'green', margin: '10px auto', fontSize: '25px' }}>Votre message a bien été envoyé, merci ! {name}</p>
                        </div>

                    }
                    <button type="submit" className="btn-send" onClick={handleSubmit} > Envoyer</button>
                </div>

            </form>
        </div >

    )
}
