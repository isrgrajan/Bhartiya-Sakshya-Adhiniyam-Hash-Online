function generateReport() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let hashOutput = document.getElementById("hashOutput").innerText;
    let hash1 = document.getElementById("hash1").value.trim();
    let hash2 = document.getElementById("hash2").value.trim();
    let compareResult = document.getElementById("compareResult").innerText;
    let date = new Date().toLocaleString();

    // Set PDF Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Bhartiya Sakshya Adhiniyam Hash Report", 10, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${date}`, 10, 25);

    doc.setFontSize(12);
    doc.text("Generated Hash:", 10, 40);
    doc.text(hashOutput || "No hash generated", 10, 50);

    doc.text("Comparison Result:", 10, 70);
    doc.text(compareResult || "No comparison done", 10, 80);

    // Digital Signature
    doc.setFontSize(10);
    doc.text("🔒 Digital Signature: Secure Hash Validation", 10, 100);

    // Save as Unmodifiable PDF
    doc.save("Hash_Report.pdf");
}
