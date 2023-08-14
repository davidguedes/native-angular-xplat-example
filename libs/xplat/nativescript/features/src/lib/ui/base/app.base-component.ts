import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@phaserscript-workspace/xplat/core';
import { AppService } from '@phaserscript-workspace/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
