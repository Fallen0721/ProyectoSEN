export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "El correo electronico no debe estar vacio"
  if (!re.test(email)) return 'Ocupa un correo electronico valido'
  return ''
}

//VERIFICACION DEL CORREO