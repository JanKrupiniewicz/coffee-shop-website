interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const sendContactForm = async (data : ContactFormData): Promise<Response> => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while sending the contact form');
    }
}