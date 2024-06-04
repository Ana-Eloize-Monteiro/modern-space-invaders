class Invader {
    constructor({position}) {
        this.velocity = {
            X: 0,
            Y: 0
        };

        const image = new Image();
        image.src = "./img/invander.png";
        image.onload = ()  => {
            const scale = 1;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                X: position.x,
                Y: position.y
            };
    };
}
    draw(){
        c.drawImage(
            this.image,
            this.position.X,
            this.position.Y,
            this.width,
            this.height
            );
    }

    update({velocity}) {
        if (this.image){
            this.draw();
            this.position.X += this.velocity.X;
            this.position.Y += this.velocity.Y;
     }

        }
        
        

        shoot(InvanderProjectiles){
            Audio.enemyShoot.play();
            InvanderProjectiles.push(
                new InvanderProjectile({
                    position: {
                        X: this.position.X + this.width / 2,
                        Y: this.position.Y + this.height / 2
                    },
                    velocity: {
                        X: 0,
                        Y: 5

                    }
                })
            )

        }
      
}

