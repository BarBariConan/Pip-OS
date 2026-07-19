window.addEventListener("DOMContentLoaded", () => {


    setInterval(() => {
        const time = document.getElementById("timeElement");
        if (time) {
            const date = new Date();
            date.setFullYear(2077);
            time.textContent = date.toLocaleString();
        }
    }, 1000);



    function dragElement(element) {
        let x = 0, y = 0, startX = 0, startY = 0;

        const header = document.getElementById(element.id + "header");

        (header || element).onmousedown = startDrag;

        function startDrag(e) {
            e.preventDefault();

            startX = e.clientX;
            startY = e.clientY;

            document.onmouseup = stopDrag;
            document.onmousemove = drag;
        }

        function drag(e) {
            e.preventDefault();

            x = startX - e.clientX;
            y = startY - e.clientY;

            startX = e.clientX;
            startY = e.clientY;

            element.style.top = (element.offsetTop - y) + "px";
            element.style.left = (element.offsetLeft - x) + "px";
        }

        function stopDrag() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }



    function openWindow(el) {
        if (el) el.style.display = "flex";
    }

    function closeWindow(el) {
        if (el) el.style.display = "none";
    }



    const welcome = document.getElementById("welcome");

    const welcomeOpen = document.getElementById("welcomeopen");
    const welcomeClose = document.getElementById("welcomeclose");

    if (welcomeOpen && welcome) {
        welcomeOpen.onclick = () => openWindow(welcome);
    }

    if (welcomeClose && welcome) {
        welcomeClose.onclick = () => closeWindow(welcome);
    }

    if (welcome) dragElement(welcome);


    const notes = document.getElementById("notesWindow");
    const notesIcon = document.getElementById("notesIcon");
    const notesClose = document.getElementById("notesclose");
    const notesText = document.getElementById("notesText");

    if (notesIcon && notes) {
        notesIcon.onclick = () => openWindow(notes);
    }

    if (notesClose && notes) {
        notesClose.onclick = () => closeWindow(notes);
    }

    if (notes) dragElement(notes);

    if (notesText) {

        const savedNotes = localStorage.getItem("vaultNotes");
        if (savedNotes) notesText.value = savedNotes;

        notesText.addEventListener("input", () => {
            localStorage.setItem("vaultNotes", notesText.value);
        });
    }



    const mapWindow = document.getElementById("mapWindow");
    const mapClose = document.getElementById("mapclose");
    const mapContainer = document.querySelector(".mapContainer");
    const mapImage = document.getElementById("mapImage");
    const mapIcon = document.getElementById("mapIcon");

    if (mapIcon && mapWindow) {
        mapIcon.onclick = () => openWindow(mapWindow);
    }

    if (mapClose && mapWindow) {
        mapClose.onclick = () => closeWindow(mapWindow);
    }

    if (mapWindow) dragElement(mapWindow);



    if (mapContainer && mapImage) {

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let imgX = 0;
        let imgY = 0;

        mapContainer.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });

        document.addEventListener("mousemove", (e) => {

            if (!isDragging) return;

            let dx = e.clientX - startX;
            let dy = e.clientY - startY;

            startX = e.clientX;
            startY = e.clientY;

            imgX += dx;
            imgY += dy;

            const scaledWidth = mapImage.offsetWidth * zoom;
            const scaledHeight = mapImage.offsetHeight * zoom;

            const containerWidth = mapContainer.clientWidth;
            const containerHeight = mapContainer.clientHeight;

            const minX = containerWidth - scaledWidth;
            const minY = containerHeight - scaledHeight;

            imgX = Math.min(0, Math.max(minX, imgX));
            imgY = Math.min(0, Math.max(minY, imgY));

            mapImage.style.left = imgX + "px";
            mapImage.style.top = imgY + "px";
        });
        let zoom = 1;

        mapContainer.addEventListener("wheel", (e) => {
        e.preventDefault();

            zoom += (e.deltaY < 0) ? 0.1 : -0.1;

            if (zoom < 0.5) zoom = 0.5;
        if (zoom > 3) zoom = 3;

        mapImage.style.transform = `scale(${zoom})`;

        const scaledWidth = mapImage.offsetWidth * zoom;
        const scaledHeight = mapImage.offsetHeight * zoom;

        const containerWidth = mapContainer.clientWidth;
        const containerHeight = mapContainer.clientHeight;

        const minX = containerWidth - scaledWidth;
        const minY = containerHeight - scaledHeight;

        imgX = Math.min(0, Math.max(minX, imgX));
        imgY = Math.min(0, Math.max(minY, imgY));

        mapImage.style.left = imgX + "px";
        mapImage.style.top = imgY + "px";
        });
    }

    const lockWindow = document.getElementById("lockWindow");
    const lockClose = document.getElementById("lockClose");
    const lockContainer = document.querySelector(".lockContainer");
    const lockIcon = document.getElementById("lockIcon");

    if (lockIcon && lockWindow) {
        lockIcon.onclick = () => openWindow(lockWindow);
    }

    if (lockClose && lockWindow) {
        lockClose.onclick = () => closeWindow(lockWindow);
    }

    if (lockWindow) dragElement(lockWindow);




const messages = [

];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

document.getElementById("Tip").textContent = randomMessage;

const Tip = [
    "War never changes.",
    "Vault-Tec reminds you to stay hydrated.",
    "Power armor requires a fusion core.",
    "Patrolling the Mojave almost makes you wish for a nuclear winter.",
    "Ad Victoriam!",
    "Scanning for Super Mutants.",
    "Warning: Deathclaw activity detected nearby.",
    "Looking for Shaun.",
    "Strong disliked that.",
    "Warning: You are overencumbered.",
    "PrestonGarvey.dll failed to load. This is considered a feature.",
    "A companion will carry your junk. This is called friendship.",
];

const Location = [
    "You are in: Sanctuary Hills",
    "You are in: Concord",
    "You are in: Diamond City",
    "You are in: Goodneighbor",
    "You are in: The Glowing Sea",
    "You are in: Quincy",
    "You are in: Far Harbor",
    "You are in: Nuka-World",
    "You are in: Vault 111",
    "You are in: Fort Strong",
    "You are in: Abernathy Farm",
];

function updateRandomText() {
    document.getElementById("Tip").textContent =
        Tip[Math.floor(Math.random() * Tip.length)];

    document.getElementById("Location").textContent =
        Location[Math.floor(Math.random() * Location.length)];
}

updateRandomText();


const pin = document.getElementById("pin");
const lock = document.getElementById("lock");
const screwdriver = document.getElementById("screwdriver");

const pinHealthDisplay = document.getElementById("pinHealth");
const unlockText = document.getElementById("unlockText");

let sweetSpot = Math.random() * 180;
let pinAngle = 90;
let pinHealth = 5;

updatePinHealth();

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft") {
        pinAngle -= 2;
    }

    if (e.key === "ArrowRight") {
        pinAngle += 2;
    }

    pinAngle = Math.max(0, Math.min(180, pinAngle));

    pin.style.transform = `rotate(${pinAngle}deg)`;

    if (e.code === "Space") {
        e.preventDefault();
        tryTurnLock();
    }

});

function tryTurnLock() {

    const distance = Math.abs(pinAngle - sweetSpot);

    let lockRotation = 0;

    if (distance < 5)
        lockRotation = 90;
    else if (distance < 15)
        lockRotation = 60;
    else if (distance < 30)
        lockRotation = 30;
    else
        lockRotation = 5;

    lock.style.transform = `rotate(${lockRotation}deg)`;
    screwdriver.style.transform = `rotate(${lockRotation}deg)`;

    setTimeout(() => {
        lock.style.transform = "rotate(0deg)";
        screwdriver.style.transform = "rotate(0deg)";
    }, 120);

    if (distance < 5) {

        unlockText.style.display = "block";

        setTimeout(() => {

            unlockText.style.display = "none";

            document.getElementById("lockWindow").style.display = "none";

            sweetSpot = Math.random() * 180;
            pinHealth = 5;
            updatePinHealth();

        }, 1200);

        return;
    }

    pinHealth--;

    updatePinHealth();

    if (pinHealth <= 0) {

        pin.style.animation = "pinShake .25s";

        setTimeout(() => {
            pin.style.animation = "";
        }, 250);

        pinHealth = 5;
        sweetSpot = Math.random() * 180;

        updatePinHealth();
    }

}

function updatePinHealth() {

    pinHealthDisplay.textContent =
        "PIN HP: " + "█".repeat(pinHealth) + "░".repeat(5 - pinHealth);

}



    const radioWindow = document.getElementById("radioWindow");
    const radioClose = document.getElementById("radioClose");
    const radioContainer = document.getElementById(".radioContainer");
    const radioIcon = document.getElementById("radioIcon");

    if (radioIcon && radioWindow) {
        radioIcon.onclick = () => openWindow(radioWindow);
    }

    if (radioClose && radioWindow) {
        radioClose.onclick = () => closeWindow(radioWindow);
    }

    if (radioWindow) dragElement(radioWindow);




});