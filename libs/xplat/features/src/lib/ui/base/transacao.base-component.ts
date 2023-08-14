import { Directive } from '@angular/core';
import { BaseComponent } from '@phaserscript-workspace/xplat/core';

@Directive()
export abstract class TransacaoBaseComponent extends BaseComponent {
  public text: string = 'Transacao';

  constructor() {
    super();
  }
}
