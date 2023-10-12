export const debug = (msg, args) => {
  let isInDebug = false;
  try {
    isInDebug = game.settings.get(CONSTANTS.MODULE_ID, "debug");
  } catch (e) {
    // DO NOTHING
    isInDebug = game.modules.get("_dev-mode")?.api?.getPackageDebugValue(CONSTANTS.MODULE_ID);
  }
  if (isInDebug) {
    console.log(`DEBUG | ${CONSTANTS.MODULE_ID} | ${msg}`, args);
    //@ts-ignore
    if (game.modules.get("_dev-mode")?.api?.getPackageDebugValue(CONSTANTS.MODULE_ID)) {
      console.log(CONSTANTS.MODULE_ID, "|", ...args);
    }
  }
  return msg;
};
