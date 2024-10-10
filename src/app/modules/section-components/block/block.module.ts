import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { BlockApiComponent } from './pages/block-api/block-api.component';
import { BlockExamplesComponent } from './pages/block-examples/block-examples.component';

import { ONavModule } from 'ngx-obelisco-v17/nav';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'ngx-obelisco-v17/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OProgressBarModule } from 'ngx-obelisco-v17/progress-bar';
import { OBlockModule } from 'ngx-obelisco-v17/block';
import { OButtonModule } from 'ngx-obelisco-v17/button';

@NgModule({
  declarations: [BlockComponent, BlockApiComponent, BlockExamplesComponent],
  imports: [
    CommonModule,
    BlockRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    OProgressBarModule,
    OBlockModule,
    OButtonModule,
  ],
})
export class BlockModule {}
