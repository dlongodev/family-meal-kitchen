const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function email(req, res) {
    const { method } = req;

    if (method === "POST") {
        try {
            const body = req.body;

            const message = `
            <p>
            <strong>Name:</strong> ${body.customer}<br><br>
            <strong>Email:</strong> ${body.email}<br><br>
            <strong>Phone:</strong> ${body.phone}<br><br>
            <strong>Event Type:</strong> ${body.eventType}<br><br>
            <strong>Event Location:</strong> ${body.eventLocation}<br><br>
            <strong>Event Date:</strong> ${body.eventDate}<br><br>
            <strong>Guest Count:</strong> ${body.guestCount}<br><br>
            <strong>About:</strong> ${body.about}</p>
            `

            const data = {
                to: "chefjoe@familymealkitchen.com",
                from: "hello@familymealkitchen.com",
                subject: "New Message from Website!",
                html: message
            }

            await mail.send(data)
            console.log("Contact form was sent!")
            res.status(200).json(body);
        } catch (err) {
            console.log("error from POST request to send form data")
            res.status(500).json(err);
        }
    }
}