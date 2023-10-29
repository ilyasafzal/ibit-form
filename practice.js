function submitAchievement() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const achievement = document.getElementById("achievement").value;
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <h2>Thank you, ${name}!</h2>
        <p>Your achievement has been submitted. We will review it shortly.</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Achievement: ${achievement}</p>
    `;
}
