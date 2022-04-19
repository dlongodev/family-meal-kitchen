export default function email(req, res) {
    const { method } = req;

    if (method === "POST") {
        try {
            const body = req.body;
            console.log("Contact form was sent!")
            res.status(200).json(body);
        } catch (err) {
            console.log("error from POST request to send form data")
            res.status(500).json(err);
        }
    }
}