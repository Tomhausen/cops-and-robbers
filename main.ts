//  sprites
let robber = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(robber)
scene.cameraFollowSprite(robber)
function setup_level() {
    scene.setTileMapLevel(assets.tilemap`level`)
    tiles.placeOnRandomTile(robber, assets.tile`player spawn`)
    tiles.setTileAt(robber.tilemapLocation(), assets.tile`floor`)
    spawn_guard()
}

setup_level()
function spawn_guard() {
    let guard = sprites.create(assets.image`guard`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(guard, assets.tile`guard spawn`)
    tiles.setTileAt(guard.tilemapLocation(), assets.tile`floor`)
    idle_behaviour(guard, guard.tilemapLocation())
}

function idle_behaviour(guard: Sprite, location: tiles.Location) {
    let y_vel: number;
    let x_vel: number;
    if (guard.vx != 0) {
        y_vel = randint(0, 1) * 100 - 50
        guard.setVelocity(0, y_vel)
    } else {
        x_vel = randint(0, 1) * 100 - 50
        guard.setVelocity(x_vel, 0)
    }
    
}

scene.onHitWall(SpriteKind.Enemy, idle_behaviour)
scene.onPathCompletion(SpriteKind.Enemy, idle_behaviour)
scene.onPathCompletion(SpriteKind.Enemy, function test() {
    console.log("comp")
})
function guard_behaviour(guard: Sprite) {
    let pos: tiles.Location;
    let col: number;
    let row: number;
    let path: tiles.Location[];
    if (check_line_of_sight(guard, robber)) {
        if (scene.spriteIsFollowingPath(guard)) {
            pos = robber.tilemapLocation()
            //  tiles.set_tile_at(pos, assets.tile("test"))
            sprites.setDataNumber(guard, "last x", pos.col)
            sprites.setDataNumber(guard, "last y", pos.row)
        } else if (spriteutils.distanceBetween(guard, robber) < 100) {
            tilesAdvanced.followUsingPathfinding(guard, robber, 30)
        }
        
    } else if (scene.spriteIsFollowingPath(guard)) {
        if (!sprites.readDataNumber(guard, "last x")) {
            return
        }
        
        col = sprites.readDataNumber(guard, "last x")
        row = sprites.readDataNumber(guard, "last y")
        path = scene.aStar(guard.tilemapLocation(), tiles.getTileLocation(col, row))
        scene.followPath(guard, path)
    }
    
}

function check_line_of_sight(source_sprite: Sprite, target: Sprite): boolean {
    let x: number;
    let y: number;
    let col: number;
    let row: number;
    let x_increment = (target.x - source_sprite.x) / 25
    let y_increment = (target.y - source_sprite.y) / 25
    for (let i = 0; i < 25; i++) {
        x = source_sprite.x + i * x_increment
        y = source_sprite.y + i * y_increment
        col = Math.floor(x / 16)
        row = Math.floor(y / 16)
        if (tiles.tileAtLocationIsWall(tiles.getTileLocation(col, row))) {
            return false
        }
        
    }
    return true
}

game.onUpdate(function tick() {
    for (let guard of sprites.allOfKind(SpriteKind.Enemy)) {
        guard_behaviour(guard)
    }
})
