const yField = document.getElementById('Y')
const submitButton = document.getElementById('submit')
const colorWrong = '#FF0000'
const colorRight = '#00FF00'
const regex = /^-?\d+([\.,]\d+)?$/

yField.oninput = validation
window.onload = validation

function validation() {
    const y = parseFloat(yField.value.replace(',', '.'))
    if (!regex.test(yField.value) || isNaN(y) || y < -5 || y > 3) {
        yField.style.borderColor = colorWrong
        submitButton.disabled = true
    } else {
        yField.style.borderColor = colorRight
        submitButton.disabled = false
    }
}