const messages = [
    "Are you sure?",
    "Really sure??",
    "dekh lo mere jaisa nai milta phir.",
    "oyii yess pe click karo.",
    "soch lo phir se !",
    "kardo na babyy plss 🥹...",
    "I will be very sad...",
    "I will be very very very sad...",
    "mai rotu 😭 😭 😭",
    "Just kidding, say yes please! ❤️",
    "bhai kya mtlb u don't love mee.!! ",
    "bhaii ab toh hadd ich hogayi..",
    "apku meri kasam baat khtm.",
    "agar ab bhi nai mannre toh dekh lo phir mai kisi aur ku puch letu."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}