function convertROT13() {

    const input =
        document.getElementById("inputText").value;

    let result = "";


    for (let i = 0; i < input.length; i++) {

        const character = input[i];

        const code = input.charCodeAt(i);


        if (code >= 65 && code <= 90) {

            result += String.fromCharCode(
                ((code - 65 + 13) % 26) + 65
            );

        }


        else if (code >= 97 && code <= 122) {

            result += String.fromCharCode(
                ((code - 97 + 13) % 26) + 97
            );

        }


        else {

            result += character;

        }

    }


    document.getElementById("outputText").value =
        result;

    updateCharacterCount();

}


function swapText() {

    const input =
        document.getElementById("inputText").value;

    const output =
        document.getElementById("outputText").value;


    document.getElementById("inputText").value =
        output;

    document.getElementById("outputText").value =
        input;


    updateCharacterCount();

}


function clearText() {

    document.getElementById("inputText").value = "";

    document.getElementById("outputText").value = "";

    updateCharacterCount();

}


function copyResult() {

    const result =
        document.getElementById("outputText").value;


    if (result === "") {

        alert("Belum ada hasil untuk disalin.");

        return;

    }


    navigator.clipboard.writeText(result)
        .then(function () {

            alert("Hasil berhasil disalin!");

        })
        .catch(function () {

            alert("Gagal menyalin hasil.");

        });

}


function updateCharacterCount() {

    const input =
        document.getElementById("inputText").value;

    const output =
        document.getElementById("outputText").value;


    document.getElementById("inputCount").textContent =
        input.length + " characters";


    document.getElementById("outputCount").textContent =
        output.length + " characters";

}


document
    .getElementById("inputText")
    .addEventListener(
        "input",
        updateCharacterCount
    );


updateCharacterCount();