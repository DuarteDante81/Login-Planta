function mostrarSenha(){
    const inputPass = document.getElementById('senha')
    const btnEye = document.getElementById('btn-eye')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnEye.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnEye.classList.replace('bi-eye-slash','bi-eye')
    }

}