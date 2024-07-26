export function passwordValidator(password) {
  if (!password) return "La Contraseña no puede estar vacia"
  if (password.length < 5) return 'La contraseña debe tener mas de 5 letras'
  return ''
}

//VERIFICACION DE LA CONTRASEÑA