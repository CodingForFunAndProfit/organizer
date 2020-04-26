import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleloaderComponent } from './components/circleloader/circleloader.component';
import { DominoloaderComponent } from './components/dominoloader/dominoloader.component';

@NgModule({
    declarations: [CircleloaderComponent, DominoloaderComponent],
    imports: [CommonModule],
    exports: [CircleloaderComponent, DominoloaderComponent],
})
export class SharedModule {}
