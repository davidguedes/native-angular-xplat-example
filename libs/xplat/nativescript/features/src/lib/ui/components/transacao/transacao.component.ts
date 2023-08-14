import { Component } from '@angular/core';

import { TransacaoBaseComponent } from '@phaserscript-workspace/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'phaserscript-workspace-transacao',
  templateUrl: './transacao.component.html',
})
export class TransacaoComponent extends TransacaoBaseComponent {
  constructor() {
    super();
  }
}
