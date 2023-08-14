import { Component } from '@angular/core';
import { AppService } from '@phaserscript-workspace/xplat/nativescript/core';
import { AppBaseComponent } from '@phaserscript-workspace/xplat/nativescript/features';

@Component({
  selector: 'phaserscript-workspace-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
