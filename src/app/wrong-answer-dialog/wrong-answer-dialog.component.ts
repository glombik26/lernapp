import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-wrong-answer-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatButton,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './wrong-answer-dialog.component.html',
  styleUrl: './wrong-answer-dialog.component.scss'
})
export class WrongAnswerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
  }
}
