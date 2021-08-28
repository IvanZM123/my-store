  export const rules = {
    name: {
      msgError: "El nombre es invalido",
      regex: /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    },
    phone: {
      msgError: "El numero de telefono es invalido",
      regex: /^[0-9]{8}$/g
    },
    url: {
      msgError: "La URL es invalida. Siga la siguiente estructura https://galery.com/image.png",
      regex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    },
    NIT: {
      msgError: "El NIT es invalido. Siga la siguiente estructura 0000-0000-0000-0",
      regex: /^(\d{4}-){3}\d{1}$/
    }
};
