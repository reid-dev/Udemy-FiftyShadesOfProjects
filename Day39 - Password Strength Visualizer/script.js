const background = document.getElementById('background');
const password = document.getElementById('password');

// Event listener for password
password.addEventListener('input', (e) => {
    const input = e.target.value;
    const strength = 20 - getStrength(input);
    background.style.filter = `blur(${strength}px)`;
})

// Get password strength based on length, uppercase, lowercase, numbers, special characters
// Maximum strength is 20
// Maximum the length can add to strength is 10
// The remaining checks sum up to the total of 20 if all are present. 
function getStrength(input) {
    const length = input.length;
    const hasUpper = /[A-Z]/.test(input);
    const hasLower = /[a-z]/.test(input);
    const hasNumber = /[0-9]/.test(input);
    const hasSpecial = /[!@#$%^&*]/.test(input);
    var strength = 0;
    if (length < 10) {
        strength = length
    } else {
        strength = 10;
    } 
    if (hasUpper) {
        strength += 2;
    }
    if (hasLower) {
        strength += 2;
    } 
    if (hasNumber) {
        strength += 3;
    }
    if (hasSpecial) {
        strength += 3;
    }
    return strength;
}
