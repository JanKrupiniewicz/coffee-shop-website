export function validateEmail(email : string) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateName(name : string) {
    return name.length > 3 && name.length < 100;
}

export function validatePhone(phone : string) {
    return phone.length > 3 && phone.length < 20;
}

export function validateMessage(message : string) {
    return message.length > 3 && message.length < 500;
}
