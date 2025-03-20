function createSession() {
    const sessionName = document.getElementById("session-name").value;
    if (sessionName) {
        alert(`Session "${sessionName}" created successfully!`);
    } else {
        alert("Please enter a session name.");
    }
}

function joinSession() {
    const joinCode = document.getElementById("join-code").value;
    if (joinCode) {
        alert(`Joined session with code: ${joinCode}`);
    } else {
        alert("Please enter a session code.");
    }
}
