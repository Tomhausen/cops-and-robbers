# sprites
robber = sprites.create(assets.image("player"), SpriteKind.player)
controller.move_sprite(robber)
scene.camera_follow_sprite(robber)

def setup_level():
    scene.set_tile_map_level(assets.tilemap("level"))
    tiles.place_on_random_tile(robber, assets.tile("player spawn"))
    tiles.set_tile_at(robber.tilemap_location(), assets.tile("floor"))
    spawn_guard()
setup_level()

def spawn_guard():
    guard = sprites.create(assets.image("guard"), SpriteKind.enemy)
    tiles.place_on_random_tile(guard, assets.tile("guard spawn"))
    tiles.set_tile_at(guard.tilemap_location(), assets.tile("floor"))
    idle_behaviour(guard, guard.tilemap_location())

def idle_behaviour(guard: Sprite, location):
    if guard.vx != 0:
        y_vel = (randint(0, 1) * 100) - 50
        guard.set_velocity(0, y_vel)
    else:
        x_vel = (randint(0, 1) * 100) - 50
        guard.set_velocity(x_vel, 0)
scene.on_hit_wall(SpriteKind.enemy, idle_behaviour)
scene.on_path_completion(SpriteKind.enemy, idle_behaviour)

def test():
    print("comp")
scene.on_path_completion(SpriteKind.enemy, test)

def guard_behaviour(guard: Sprite):
    if check_line_of_sight(guard, robber):
        if scene.sprite_is_following_path(guard):
            pos = robber.tilemap_location()
            # tiles.set_tile_at(pos, assets.tile("test"))
            sprites.set_data_number(guard, "last x", pos.col)
            sprites.set_data_number(guard, "last y", pos.row)
        else:
            if spriteutils.distance_between(guard, robber) < 100:
                tilesAdvanced.follow_using_pathfinding(guard, robber, 30)
    else:
        if scene.sprite_is_following_path(guard):
            if not sprites.read_data_number(guard, "last x"):
                return
            col = sprites.read_data_number(guard, "last x")
            row = sprites.read_data_number(guard, "last y")
            path = scene.a_star(guard.tilemap_location(), tiles.get_tile_location(col, row))
            scene.follow_path(guard, path)

def check_line_of_sight(source_sprite: Sprite, target: Sprite):
    x_increment = (target.x - source_sprite.x) / 25
    y_increment = (target.y - source_sprite.y) / 25
    for i in range(25):
        x = source_sprite.x + (i * x_increment)
        y = source_sprite.y + (i * y_increment)
        col = Math.floor(x / 16)
        row = Math.floor(y / 16)
        if tiles.tile_at_location_is_wall(tiles.get_tile_location(col, row)):
            return False
    return True

def tick():
    for guard in sprites.all_of_kind(SpriteKind.enemy):
        guard_behaviour(guard)
game.on_update(tick)


# guided hack: have to escape
# test recreate for loop
