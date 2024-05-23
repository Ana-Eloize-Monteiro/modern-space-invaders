class Grid{
    constructor(){
        this.position = {
            X: 0,
            Y: 0
        };
        this.velocity = {
            X: 3,
            Y: 0
        };

        this.invaders= [];

        const columns = Math.floor(Math.random()*10 + 5);
        const rows = Math.floor(Math.random() * 10+ 2);
        this.width = columns * 30;

        for (let i=0; i< columns; i++) {
            for (let j=0; j <rows; j++) {
                    this.invaders.push(new Invader({
                    position: {
                        i: i * 30,
                        j:j * 30
                    }

                    }));
            }
        }
    }
}