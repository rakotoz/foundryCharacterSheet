import { settingsList } from "./settingsList.js";

export class RevanCSSettings extends FormApplication {
  static isInitialized = false;

  static init() {
    if (!RevanCSSettings.isInitialized) {
      settingsList();
      RevanCSSettings.isInitialized = true;
    }
  }
}
