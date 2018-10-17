let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1, openDoor2, openDoor3;

let botDoorPath = './images/robot.svg';
let beachDoorPath = './images/beach.svg';
let spaceDoorPath = './images/space.svg';
let closedDoorPath = './images/closed_door.svg';
let currentlyPlaying = true;

const startButton = document.getElementById('start');

const playDoor = (door) => {
    numClosedDoors--;

    if (numClosedDoors === 0) {
        gameOver();
    } else if(isBot(door)) {
        gameOver();
    }
}

const isClicked = (door) => {
    if (door.src == closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const randomChoreDoorGenerator = () => {
    numClosedDoors = 3;
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

const isBot = (door) => {
    if (door.src == botDoorPath) {
        return true;
    } else {
        return false;
    }
}

if(!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.onclick = () => {
        doorImage1.src = openDoor1;
        playDoor()
    }
}

if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.onclick = () => {
        doorImage2.src = openDoor2;
    }
}

if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.onclick = () => {
        doorImage3.src = openDoor3;
    }
}

const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status == 'win') {
        startButton.innerText = 'You win! Play again?';
    } else {
        startButton.innerText = 'Game over! Play again?';
    }

    currentlyPlaying = false;
}