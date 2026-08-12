async function askAI() {
    const input = document.getElementById("aiInput");
    const chat = document.getElementById("aiChat");

    const message = input.value.trim();

    if (!message) return;

    chat.innerHTML += `<div><b>You:</b> ${message}</div>`;
    input.value = "";

    try {
        const response = await fetch("https://https://sandeshyadavfoundation.vercel.app/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if (data.answer) {
            chat.innerHTML += `<div><b>AI:</b> ${data.answer}</div>`;
        } else {
            chat.innerHTML += `<div><b>Error:</b> ${data.error}</div>`;
        }

    } catch (error) {
        chat.innerHTML += `<div><b>Error:</b> Unable to connect to AI.</div>`;
    }
}
