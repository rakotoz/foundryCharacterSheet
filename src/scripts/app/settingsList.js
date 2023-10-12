import { RevanCSSettings } from "./settings.js";
import CONSTANTS from "./constants.js";

export const settingsList = () => {
  game.settings.registerMenu(CONSTANTS.MODULE_ID, "userMenu", {
    name: `REVANCS.Settings.SheetMenu.name`,
    label: "REVANCS.Settings.SheetMenu.label",
    hint: `REVANCS.Settings.SheetMenu.hint`,
    icon: "fas fa-cog",
    type: RevanCSSettings,
    restricted: false,
  });
};
