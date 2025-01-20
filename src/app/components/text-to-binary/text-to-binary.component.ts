import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-text-to-binary',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './text-to-binary.component.html',
  styleUrls: ['./text-to-binary.component.css']
})
export class TextToBinaryComponent {
  text: string = '';
  binary: string = '';

  convertToBinary() {
    this.binary = this.text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  }
}