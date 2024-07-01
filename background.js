class Layer{
    constructor(game , width , height , speedmodifier , image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedmodifier = speedmodifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    
    update(){
        this.x -= this.game.speed * this.speedmodifier;
        if(this.x <= -this.width) {
            this.x += this.width;
        }
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);

        context.drawImage(this.image , this.x + this.width , this.y , this.width , this.height);
}
};

export class Background{
    constructor(game){
        this.game = game;
        this.width = 889;
        this.height = 500;

        this.layer1images = document.getElementById('layer1');
        this.layer2images = document.getElementById('layer2');
        this.layer3images = document.getElementById('layer3');
        this.layer4images = document.getElementById('layer4');
        this.layer5images = document.getElementById('layer5');

        this.layer1 = new Layer(this.game ,  this.width, this.height , 0, this.layer1images);
        this.layer2 = new Layer(this.game ,  this.width, this.height , 0.2, this.layer2images);
        this.layer3 = new Layer(this.game ,  this.width, this.height , 0.4, this.layer3images);
        this.layer4 = new Layer(this.game ,  this.width, this.height , 0.8, this.layer4images);
        this.layer5 = new Layer(this.game ,  this.width, this.height , 3, this.layer5images);

        this.backgroundlayers = [this.layer1 , this.layer2 , this.layer3 , this.layer4 , this.layer5];
    }
    
    update(){
        this.backgroundlayers.forEach(layer => {
            layer.update();
        });
    }

    draw(context){
        this.backgroundlayers.forEach(layer => {
            layer.draw(context);
        });
    }

}