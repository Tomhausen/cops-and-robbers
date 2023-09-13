// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000060707070707070707070707070707030a0b0b0b0b0b0b0b0b0b0b0b0b0b0b080a0b0b0b0b0b0c0b0b0b0b0b0b0b0b080a0b0b0b0c0c0c0b0b0c0c0c0c0b0c080a0b0c0c0c0b0b0b0b0b0b0b0c0b0b080a0b0b0b0c0b0b0b0b0b0b0b0c0c0b080a0b0b0b0b0b0c0c0c0b0b0c0c0b0b080a0c0c0b0b0b0b010c0b0c0b0b0b0b080a0b0b0b0b0b0b0c0c0b0b0b0b0b0b080a0b0b0c0c0b0b0b0b0b0b0b0c0b0b080a0b0b0c0b0b0b0b0b0b0c0c0c0b0b080a0c0b0b0b0b0c0b0b0c0b0b0b0b0b080a0b0b0c0c0c0c0b0b0c0b0b0b0b0b080a0b0b0c0b0b0c0b0b0c0c0c0c0b0b080a0b0b0b0b0b0b0b0b0b0b0b0b0b020804090909090909090909090909090905`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . 2 2 2 . . 2 2 2 2 . 2 2 
2 . 2 2 2 . . . . . . . 2 . . 2 
2 . . . 2 . . . . . . . 2 2 . 2 
2 . . . . . 2 2 2 . . 2 2 . . 2 
2 2 2 . . . . . 2 . 2 . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . 2 2 . . . . . . . 2 . . 2 
2 . . 2 . . . . . . 2 2 2 . . 2 
2 2 . . . . 2 . . 2 . . . . . 2 
2 . . 2 2 2 2 . . 2 . . . . . 2 
2 . . 2 . . 2 . . 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "treasure spawn":
            case "tile3":return tile3;
            case "guard spawn":
            case "tile1":return tile1;
            case "player spawn":
            case "tile2":return tile2;
            case "floor":
            case "tile4":return tile4;
            case "wall":
            case "tile6":return tile6;
            case "test":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
