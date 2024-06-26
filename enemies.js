class enemy {
    constructor(){
        this.FrameX = 0;
        this.FrameY = 0;
        this.fps = 20;
        this.frameinterval = 1000 / this.fps;
        this.frametimer = 0;
    }
    update(deltatime) {
        this.x -= this.speedX - this.game.speed;
        this.y += this.speedY;
        if(this.frametimer > this.frameinterval){
            this.frametimer = 0;
            if( this.FrameX < this.maxframe) this.FrameX++;
            else this.FrameX = 0;
        } else {
            this.frametimer += deltatime;
        }

        if (this.x  + this.width < 0) this.markedforDeletion = true;
    }

    draw(context){
        context.drawImage(this.image , this.FrameX * this.width, 0 , this.width ,  this.height , this.x , this.y , this.width, this.height);
    }
}

export class Flyingenemy extends enemy{
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random()*this.game.height * 0.5;
        this.speedX = 2;
        this.maxframe = 5;
        this.image = document.getElementById('enemy_fly');
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
    }
    update(deltatime){
        super.update(deltatime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);
    }
}

export class Groundenemy extends enemy{
    constructor(){
        this.game = game;
        this.width = 60;
        this.height = 87;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('enemy_plant');
        this.speedX = 0;
        this.speedY = 0;
        this.maxframe = 1;
    }
}

export class Climbingenemy extends enemy{
    constructor(){
        super();
        this.game = game;
        this.width = 120;
        this.height = 144;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = document.getElementById('enemy_spider');
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
        this.maxframe = 5;

    } 
    update(deltatime){
        super.update(deltatime);
        if(this.y > this.game.height - this.height - this.game.groundMargin) this.speed *= -1;
        if(this.y < -this.height) this.markedforDeletion = true;
    } 
    draw(context){
        super.draw(context);
        context.beginPath();
        context.moveTo(this.x + this.width/2 , 0);
        context.lineTo(this.x + this.width/2 , this.y+ 50);
        context.stroke();
    }
}