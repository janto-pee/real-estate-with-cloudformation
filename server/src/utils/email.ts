import config from 'config';

const style = `
background: #ebebeb
padding: 1.5rem
border-radius: 1.5rem
`
export default function sendEmail(email: string, content: string, replyTo: string, subject: string){
    return {
        Source: config.get<string>('EMAIL_FROM'),
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                        <html>
                            <div style="${style}"></div>
                            <h1>Welcome to the Largest Mechanic Community</h1>
                            ${content}
                            <p>&copy; ${new Date().getFullYear()}<p/>
                        </html>
                    `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject
            }
        }
    }
}