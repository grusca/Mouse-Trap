'use strict'

function Mouse (canvas, level = 1) {
    this.lives = 2;
    this.size = 60;
    this.canvas = canvas;
    this.x = this.canvas.width/2;
    this.y = this.canvas.height/1.1;
    this.ctx = this.canvas.getContext('2d');
    this.img = document.getElementById('imgRat');
    this.speed = 5;
    this.xDirection = 0;
    this.yDirection = 0;
}

Mouse.prototype.render = function () {                                                    
    this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size*1.2); 
}

Mouse.prototype.update = function () {
    this.x = Math.min(Math.max(this.x + this.xDirection * this.speed,this.size/2),this.canvas.width-this.size/2);
    this.y = Math.min(Math.max(this.y + this.yDirection * this.speed,this.size/2),this.canvas.height-this.size/2);
}


Mouse.prototype.setxDirection = function (newDirection) {
    this.xDirection = newDirection;
}

Mouse.prototype.setyDirection = function (newDirection) {
    this.yDirection = newDirection;
}

Mouse.prototype.setLives = function () {
    this.lives --;
}


Mouse.prototype.checkCollisionWithCat = function (cat) {
    const catCollisionRight = this.x + this.size/2 > cat.x - cat.size/2;
    const catCollisionLeft = this.x - this.size/2 < cat.x + cat.size/2;
    const catCollisionTop = this.y - this.size/2 < cat.y + cat.size/2;
    const catCollisionBottom = this.y + this.size/2 > cat.y - cat.size/2;
    return catCollisionRight && catCollisionLeft && catCollisionTop && catCollisionBottom;
}



Mouse.prototype.checkCollisionWithCheese = function (cheese) {
    const cheeseCollisionRight = this.x + this.size/2 > cheese.x - cheese.size/2;
    const cheeseCollisionLeft = this.x - this.size/2 < cheese.x + cheese.size/2;
    const cheeseCollisionTop = this.y - this.size/2 < cheese.y + cheese.size/2;
    const cheeseCollisionBottom = this.y + this.size/2 > cheese.y - cheese.size/2;
    return cheeseCollisionRight && cheeseCollisionLeft && cheeseCollisionTop && cheeseCollisionBottom;
}


Mouse.prototype.checkCollisionWithTrap = function (trap) {
    const trapCollisionRight = this.x + this.size/2 > trap.x - trap.size/2;
    const trapCollisionLeft = this.x - this.size/2 < trap.x + trap.size/2;
    const trapCollisionTop = this.y - this.size/2 < trap.y + trap.size/2;
    const trapCollisionBottom = this.y + this.size/2 > trap.y - trap.size/2;
    return trapCollisionRight && trapCollisionLeft && trapCollisionTop && trapCollisionBottom;
}

Mouse.prototype.checkCollisionWithPower = function (power) {
    const powerCollisionRight = this.x + this.size/2 > power.x - power.size/2;
    const powerCollisionLeft = this.x - this.size/2 < power.x + power.size/2;
    const powerCollisionTop = this.y - this.size/2 < power.y + power.size/2;
    const powerCollisionBottom = this.y + this.size/2 > power.y - power.size/2;
    return powerCollisionRight && powerCollisionLeft && powerCollisionTop && powerCollisionBottom;
}

Mouse.prototype.checkCollisionWithPoison = function (poison) {
    const poisonCollisionRight = this.x + this.size/2 > poison.x - poison.size/2;
    const poisonCollisionLeft = this.x - this.size/2 < poison.x + poison.size/2;
    const poisonCollisionTop = this.y - this.size/2 < poison.y + poison.size/2;
    const poisonCollisionBottom = this.y + this.size/2 > poison.y - poison.size/2;
    return poisonCollisionRight && poisonCollisionLeft && poisonCollisionTop && poisonCollisionBottom;
}
