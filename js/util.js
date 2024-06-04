function randomBetween(min, max) {
    return Math.random () * (max - min ) + min;
}

function createScoreLabel({score = 100, object}){
    const scoreLabel = document.createElement("label");

    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = "white";
    scoreLabel.style.top = object.postition.y + "px";
    scoreLabel.style.left = object.postition.x + "px";
    scoreLabel.style.userSelect = "none";

    document.querySelector("#parentDiv").appendChild(scoreLabel);

     gsap.to(scoreLabel,{
        opacity: 0,
        y: -30,
        duraction: 0.75,
        onComplete: () => {
            document.querySelector("#parentDiv").removeChild(scoreLabel);
        }
     });
}

function rectangularCollission({rectangle1 ,rectangle2}){
    return (
        rectangle1.position.y + rectangle1.height >=rectangle2.position.y &&
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width 
    );
}

function createParticles({object, color, fades}){
    for(let i = 0; i < 15; i++){
        particles.push
        new Particles({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2
            },
            velocity:{
                X: (Math.randon() -0.5)* 2,
                Y: (Math.randon() -0.5)* 2
            },
            radius: Math.random() * 3,
            color: color || "#BAA0DE",
            fades: fades
        })
    
    }
}
