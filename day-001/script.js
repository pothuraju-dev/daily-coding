const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')

const text = document.querySelector('#text')

// button1

function countPairs(M, N) {
    let count = 0;

    // Iterate through possible values of a
    for (let a = 1; a <= Math.floor(M / 2); a++) {
        let b = M - a;
        if ((a ^ b) === N) { // XOR condition check
            count++;
        }
    }

    return count;
}

function getResponse() {
    const m = parseInt(input1.value);
    const n = parseInt(input2.value);

    text.innerText = `Number of positive integer pairs (a, b) such that a + b = ${m} and a XOR b = ${n} is: ${countPairs(m, n)}`
}

function resetResponse() {
    // Temporarily remove the required attribute to reset input fields
    input1.removeAttribute('required');
    input2.removeAttribute('required');

    input1.value = "";
    input2.value = "";

    // Reapply the required attribute
    setTimeout(() => {
        input1.setAttribute('required', '');
        input2.setAttribute('required', '');
    }, 100)


    text.innerText = ""
}

button1.onclick = getResponse
button2.onclick = resetResponse
