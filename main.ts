controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.gameOver(false)
})
let truck: Sprite = null
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000046c0008000c0001240c001000041e20272a10001400031e20271400180002242718001c00031920241c002000041e25292c20002400021d2524002800051d20222a2c28002c0003191d272c0030000322272a30003400012734003800031e222a38003c00012a3c00400003202427`), music.PlaybackMode.LoopingInBackground)
truck = sprites.create(assets.image`truck3`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
animation.runImageAnimation(
    truck,
    assets.animation`truck3 animated`,
    100,
    true
)
