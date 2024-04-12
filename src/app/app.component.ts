import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import data from '../assets/verkehrszeichen/data/data.json';
import { NgForOf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CorrectAnswerDialogComponent } from './correct-answer-dialog/correct-answer-dialog.component';
import { WrongAnswerDialogComponent } from './wrong-answer-dialog/wrong-answer-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, MatCard, MatCardContent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lernapp';

  public data:{title:string, url: string}[] = data;
  public currentSign!: {title:string, url: string};
  public lastSign?: {title:string, url: string};
  public currentQuestion!: {sign: {title:string, url: string}, correctAnswer: string, wrongAnswers: string[], allAnswers: string[]};
  protected readonly Math = Math;

  constructor(public dialog: MatDialog) {
    this.initNewQuestion();
  }

  private generateWrongAnswers(possibleAnswerPool: string[], correctAnswer: string): string[] {
    let result: string[] = [];
    do {
      let random: string = this.getRandomElement(possibleAnswerPool);
      if (!result.some(value => value === random) && random !== correctAnswer) {
        result.push(random);
      }
    } while (result.length != 3)
    return result;
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  handleClick(answer: string, correctAnswer: string) {
    if (answer === correctAnswer) {
      this.openCorrectAnswerDialog();
    } else {
      this.openWrongAnswerDialog();
    }
    setTimeout(() => {
      this.initNewQuestion();
    }, 100);
  }

  private openCorrectAnswerDialog() {
    this.dialog.open(CorrectAnswerDialogComponent);
  }

  private openWrongAnswerDialog() {
    this.dialog.open(WrongAnswerDialogComponent, {
      data: this.currentQuestion.correctAnswer
    });
  }

  private initNewQuestion() {
    this.currentSign = data[Math.floor(Math.random() * this.data.length)];
    const wrongAnswers = this.generateWrongAnswers(this.data.map(value => value.title), this.currentSign.title);
    this.currentQuestion = {
      sign: this.currentSign,
      correctAnswer: this.currentSign.title,
      wrongAnswers: wrongAnswers,
      allAnswers: [this.currentSign.title, ...wrongAnswers].sort(() => Math.random() - 0.5),
    }
  }
}
