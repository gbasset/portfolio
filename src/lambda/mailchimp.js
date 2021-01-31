import MailChimp from 'mailchimp-api-v3'
import md5 from 'md5'
const mailchimp = new MailChimp('74be5c240d51914b3451ee7c9f754764-us17')
//https://css-tricks.com/netlify-functions-for-sending-emails/
export async function handler(event, context, callback) {
    const data = JSON.parse(event.body)
    const email = data.email
    const emailHash = md5(email)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: 'email ok!', test: 'ok' }),
    })
}
