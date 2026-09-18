function displayOnInput(value) {
    let input = document.querySelector("#display");
    input.value += value
}
function clearInput() {
    let input = document.querySelector("#display");
    input.value = " "
}
function removeValues() {
    let input = document.querySelector("#display");
    let arr = input.value.split("")
    if(arr.length > 0){
      arr.pop()
    }
    input.value = arr.join("")
}
function calculate() {
    let input = document.querySelector("#display");
    try {
         input.value = eval(input.value)
    } catch (error) {
        input.value = "SYNTAX ERROR"
    }
}