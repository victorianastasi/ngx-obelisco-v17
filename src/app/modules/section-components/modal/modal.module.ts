import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OModalModule } from 'ngx-obelisco-v17/modal';
import { ONavModule } from 'ngx-obelisco-v17/nav';
import { OTableModule } from 'ngx-obelisco-v17/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalApiComponent } from './pages/modal-api/modal-api.component';
import { ModalExamplesComponent } from './pages/modal-examples/modal-examples.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'ngx-obelisco-v17/button';

@NgModule({
  declarations: [ModalComponent, ModalApiComponent, ModalExamplesComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    OModalModule,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OButtonModule,
  ],
})
export class ModalModule {}
