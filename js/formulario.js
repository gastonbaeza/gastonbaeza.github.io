const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input[type=text]')
const submit = document.getElementsByClassName('submit')[0]

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar tildes.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{4,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	mail: false,
	telefono: false
}

function removeCheckMarks(field){
	document.getElementsByClassName(field)[0].classList.remove('incorrecto')
    document.getElementsByClassName(field)[0].classList.remove('correcto')
    document.getElementsByClassName('error_' + field)[0].classList.remove('true')
    document.getElementsByClassName('error_' + field)[0].classList.remove('false')
	document.getElementsByClassName('error_' + field)[0].classList.add('nonSet')
}

const validarFormulario = (e) => {
	if (e.target.value.length > 5){
		switch (e.target.name) {
			case "nombre":
				validarCampo(expresiones.nombre, e.target, 'nombre')
			break
			case "mail":
				validarCampo(expresiones.mail, e.target, 'mail')
			break
			case "telefono":
				validarCampo(expresiones.telefono, e.target, 'telefono')
			break
		}
	} else {
		removeCheckMarks(e.target.name)
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        document.getElementsByClassName(campo)[0].classList.remove('incorrecto')
        //document.getElementsByClassName(campo)[0].classList.add('correcto')
        document.getElementsByClassName('error_' + campo)[0].classList.remove('true')
		//document.getElementsByClassName('error_' + campo)[0].classList.remove('nonSet')
        //document.getElementsByClassName('error_' + campo)[0].classList.add('false')
		campos[campo] = true
	} else {
        document.getElementsByClassName(campo)[0].classList.remove('correcto')
        document.getElementsByClassName(campo)[0].classList.add('incorrecto')
        document.getElementsByClassName('error_' + campo)[0].classList.remove('false')
		document.getElementsByClassName('error_' + campo)[0].classList.remove('nonSet')
        document.getElementsByClassName('error_' + campo)[0].classList.add('true')
		campos[campo] = false
	}
}

inputs.forEach((input) => {
	//input.addEventListener('keyup', validarFormulario)
	input.addEventListener('blur', validarFormulario)
})

submit.addEventListener('click', (e) => {
	e.preventDefault()

	if(campos.nombre && campos.mail && campos.telefono){
        formulario.reset()
		submit.classList.add('validated')
		submit.value = "Consulta enviada! Responderemos a tu mail"
		setTimeout(() => {
			submit.classList.remove('validated')
			submit.value = "Enviar"
		}, 4000)
	} else {
		submit.classList.add('not_validated')
		submit.value = "Revisa los datos!"
		setTimeout(() => {
			submit.classList.remove('not_validated')
			submit.value = "Enviar"
		}, 4000)
	}
})