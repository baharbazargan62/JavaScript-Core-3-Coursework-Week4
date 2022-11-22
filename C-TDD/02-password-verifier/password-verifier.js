function passwordVerifier(password){
if (password.toString().length <8 || !password || !(/[A-Z]/g).test(password) || !(/[0-9]/g).test(password)){
 return 'Password rejected'
}else {
    return 'Password accepted'
}
}

module.exports =passwordVerifier