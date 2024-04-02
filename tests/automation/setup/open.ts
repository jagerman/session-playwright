import { join } from 'path';
import { writeFile } from 'fs';
import { isEmpty } from 'lodash';
import { _electron as electron } from '@playwright/test';

export const NODE_ENV = 'production';
export const MULTI_PREFIX = 'test-integration-';
const multisAvailable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getAppRootPath() {
  if (isEmpty(process.env.SESSION_DESKTOP_ROOT)) {
    throw new Error(
      "You need to set the 'SESSION_DESKTOP_ROOT' env variable to the session folder you want to test first",
    );
  }
  return process.env.SESSION_DESKTOP_ROOT as string;
}

export async function openApp(windowsToCreate: number) {
  if (windowsToCreate >= multisAvailable.length) {
    throw new Error(`Do you really need ${multisAvailable.length} windows?!`);
  }
  // if windowToCreate = 3, this array will be ABC. If windowToCreate = 5, this array will be ABCDE
  const multisToUse = multisAvailable.slice(0, windowsToCreate);

  const array = [...multisToUse];
  const toRet = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const openedWindow = await openAppAndWait(`${element}`);
    toRet.push(openedWindow);
  }
  console.log(`Pathway to app: `, process.env.SESSION_DESKTOP_ROOT);
  return toRet;
}

const openElectronAppOnly = async (multi: string) => {
  process.env.MULTI = `${multi}`;
  const app_instance = `${MULTI_PREFIX}-testnet-devprod-${Date.now()}-${multi}`;
  process.env.NODE_APP_INSTANCE = app_instance;
  process.env.NODE_ENV = NODE_ENV;

  console.info('   NODE_ENV', process.env.NODE_ENV);
  console.info('   NODE_APP_INSTANCE', process.env.NODE_APP_INSTANCE);
  writeFile(join(getAppRootPath(), 'config', `local-${app_instance}.json`), '{}', (err: Error) => {
      if (err) throw err;
  });
  const electronApp = await electron.launch({
    args: [join(getAppRootPath(), 'ts', 'mains', 'main_node.js')],
  });
  return electronApp;
};

const openAppAndWait = async (multi: string) => {
  const electronApp = await openElectronAppOnly(multi);
  // Get the first window that the app opens, wait if necessary.
  const window = await electronApp.firstWindow();

  // await window.reload();
  return window;
};
