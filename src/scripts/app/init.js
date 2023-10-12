import { CharacterSheet } from "./characterSheet.js";
import { NPCSheet } from "./NPCSheet.js";
import {ItemSheet} from "./itemSheet.js";

export const RevanCSSheetsInitialize = () => {
  Actors.registerSheet("dnd5e", CharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "REVANCS.REVANCSCHARACTER",
  });
  Actors.registerSheet("dnd5e", NPCSheet, {
    types: ["npc"],
    makeDefault: true,
    label: "REVANCS.REVANCSNPC",
  });
  Items.registerSheet("dnd5e", ItemSheet, { makeDefault: true, label: "REVANCS.REVANCSNPCITEM" });
};
