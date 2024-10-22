// TODO: Implement the password generation logic based on user input
export const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let setCharacter = '';
    if (options.includeUppercase) setCharacter += uppercase;
    if (options.includeLowercase) setCharacter += lowercase;
    if (options.includeNumbers) setCharacter += numbers;
    if (options.includeSpecialChars) setCharacter += specialChars;

    if (setCharacter === '') {
        throw new Error('Please select at least one character type.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * setCharacter.length);
        password += setCharacter[randomIndex];
    }

    return password;
};
