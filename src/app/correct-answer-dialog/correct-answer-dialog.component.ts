import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-correct-answer-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './correct-answer-dialog.component.html',
  styleUrl: './correct-answer-dialog.component.scss'
})
export class CorrectAnswerDialogComponent {

}
