/**
 * The available Asset types. Corresponds to a texture image file, particle, or
 * any other external resource used for rendering. The value of the enum
 * corresponds to the asset loaded in by the F_LOADER.
 */
 export enum Asset {
  NullTexture = "NULL_TEX",
  Player = "player_stand_in",
  OrdinaryFolk = "npc_stand_in",
  TEST_npc = "npc_stand_in",
  TEST_player = "player_stand_in"
}
