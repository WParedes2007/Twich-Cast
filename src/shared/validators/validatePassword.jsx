export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/;
    return regex.test(password);
}

export const validatePasswordMessage = 'contraseña de 6 a 12 caracteres'