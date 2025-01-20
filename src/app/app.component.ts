import { Component } from '@angular/core';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { TextToBinaryComponent } from './components/text-to-binary/text-to-binary.component';
import { BinaryToTextComponent } from './components/binary-to-text/binary-to-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedHeaderComponent, TextToBinaryComponent, BinaryToTextComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}