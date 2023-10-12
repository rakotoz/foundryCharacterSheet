import CONSTANTS from "./constants.js";

export class CharacterSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
  get template() {
    if (!game.user.isGM && this.actor.limited && !game.settings.get(CONSTANTS.MODULE_ID, "expandedSheetEnabled"))
      return `${CONSTANTS.PATH}/templates/actors/revan-sheet-ltd.html`;
    return `${CONSTANTS.PATH}/templates/actors/revan-sheet.html`;
  }
}
