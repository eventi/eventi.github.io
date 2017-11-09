var game = new Phaser.Game(1080, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var cursors;

function preload() {
    game.load.audio('jump',['res/jump.ogg','res/jump.ogg']);
    game.load.audio('music',['res/music.mp3','res/music.mp3']);
    game.load.image('tux','res/tux.png');
    game.load.image('brick','res/brick.png');
}

function create() {
    //world
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //stage
    game.stage.backgroundColor = "#4488AA";

    //music
    //music = game.add.audio('music');
    //music.play('',0,1,true);

    //player
    players = game.add.group();
    players.enableBody = true;
    createPlayer(10,10,-300,225);
    createPlayer(200,150,-200,150);

    //floor
    platforms = game.add.group();
    platforms.enableBody = true;
    createPlatform();

    //input
    cursors = game.input.keyboard.createCursorKeys();
    game.input.onDown.add(go_fullscreen, this);
}

function update() {
    playerUpdate();
}

function createPlayer(x,y,j,v){
    //TODO - Check Values are within canvas
    var player = players.create(x,y,'tux');
    player.body.bounce.y  = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.jump = j;
    player.velocity = v;
}

function playerUpdate(){
    game.physics.arcade.collide(players,players);
    game.physics.arcade.collide(players,platforms);
    players.forEach(function (p) {
        p.body.velocity.x = 0;
        if(cursors.left.isDown){
            p.body.velocity.x = -p.velocity;
        }else if(cursors.right.isDown){
            p.body.velocity.x =  p.velocity;
        }
        if(cursors.up.isDown && p.body.touching.down){
            var snd = game.add.audio('jump');
            snd.play();
            p.body.velocity.y = p.jump;
        }
    });
}

function createPlatform(){
    for(var i = 0; i < game.world.width; i+=64){
        var ground = platforms.create(i,game.world.height - 64,'brick');
        ground.body.immovable = true;
    }
}

function go_fullscreen(){
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.startFullScreen();
}
