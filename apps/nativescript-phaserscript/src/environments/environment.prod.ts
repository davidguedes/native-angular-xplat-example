import { environmentBase } from './environment.base';
import { IEnvironment } from '@phaserscript-workspace/xplat/core';
import { environmentProd } from '@phaserscript-workspace/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});