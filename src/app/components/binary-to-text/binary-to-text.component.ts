import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-binary-to-text',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './binary-to-text.component.html',
  styleUrls: ['./binary-to-text.component.css']
})
export class BinaryToTextComponent {
  binary: string = '';
  text: string = '';

  convertToText() {
    this.text = this.binary
      .split(' ')
      .map(bin => String.fromCharCode(parseInt(bin, 2)))
      .join('');
  }
}