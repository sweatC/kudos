export const checkFirstName = fName => {
	return fName != '' &&  /^\w+$/.test(fName)
		&& fName.length < 10 ? fName : false; 
}
export const checkLastName = lName => {
	return lName != '' && /^\w+$/.test(lName)
		&& lName.length < 15 ? lName : false;
}
export const checkEmail = email => {
	return email.search(/[a-zA-Z0-9\._+]+@[a-zA-Z]+\.(com|org|edu|net)/) != -1 ? email: false;
}
export const checkPassword = password => {
	// at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password) ? password: false;
}
