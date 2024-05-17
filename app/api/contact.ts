export default function handler(req : any, res : any) {
    console.log(req.body);
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;
        if (!firstName || !lastName || !email || !phone || !message) {
            res.status(400).json({ message: 'Please fill out all fields' });
        } else {
            res.status(200).json({ message: 'Success' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}