// Compute Hash Function
function computeHash() {
    let fileInput = document.getElementById("fileInput");
    let textInput = document.getElementById("textInput").value.trim();
    let algorithm = document.getElementById("hashAlgorithm").value;
    let hashOutput = document.getElementById("hashOutput");

    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let fileData = event.target.result;
            let hash = generateHash(fileData, algorithm);
            hashOutput.innerText = hash;
        };
        reader.readAsBinaryString(fileInput.files[0]);
    } else if (textInput !== "") {
        let hash = generateHash(textInput, algorithm);
        hashOutput.innerText = hash;
    } else {
        alert("Please enter text or upload a file.");
    }
}

// Hash Generation Function
function generateHash(data, algorithm) {
    switch (algorithm) {
        case "SHA-256": return CryptoJS.SHA256(data).toString();
        case "SHA-1": return CryptoJS.SHA1(data).toString();
        case "MD5": return CryptoJS.MD5(data).toString();
        default: return "Invalid Algorithm";
    }
}

// Compare Hashes Function
function compareHashes() {
    let hash1 = document.getElementById("hash1").value.trim();
    let hash2 = document.getElementById("hash2").value.trim();
    let resultElement = document.getElementById("compareResult");

    if (!hash1 || !hash2) {
        resultElement.innerHTML = "<span class='text-danger'>Both hash values are required!</span>";
        return;
    }

    resultElement.innerHTML = (hash1 === hash2) 
        ? "<span class='text-success'>✅ Hashes Match!</span>" 
        : "<span class='text-danger'>❌ Hashes Do NOT Match!</span>";
}
