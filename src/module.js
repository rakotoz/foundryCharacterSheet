import { RevanCSSettings } from "./scripts/app/settings.js";
import { debug } from "./scripts/app/debugUtil.js";
import { RevanCSSheetsInitialize } from "./scripts/app/init.js";

Hooks.once("init", async () => {
  debug(`Revan module star`);
  RevanCSSettings.init();
  RevanCSSheetsInitialize();
  debug(`Revan module end`);
});
