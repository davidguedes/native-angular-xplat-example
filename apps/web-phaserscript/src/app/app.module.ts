import { NgModule } from "@angular/core";

// app
//import { UIModule } from '@phaserscript-workspace/xplat/web/features';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./features/shared/shared.module";

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
