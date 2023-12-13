export const validateForm = (dataUser, confirmEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {
        name: dataUser.name.length > 30
            ? "El nombre debe tener hasta 30 caracteres"
            : "",
        phone: isNaN(dataUser.phone) || dataUser.phone.length > 15
            ? "El teléfono debe contener solo números y tener hasta 15 caracteres"
            : "",
            email: dataUser.email && !emailRegex.test(dataUser.email)
            ? "El formato del correo electrónico no es válido"
            : "",
        confirmEmail: confirmEmail !== dataUser.email
            ? "Los correos electrónicos no coinciden"
            : ""
    };
   
    const isValid = Object
        .values(errors)
        .every((error) => error === "");

    return {errors, isValid};
};

