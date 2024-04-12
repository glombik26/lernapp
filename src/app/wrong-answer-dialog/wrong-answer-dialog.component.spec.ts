import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAnswerDialogComponent } from './wrong-answer-dialog.component';

describe('WrongAnswerDialogComponent', () => {
  let component: WrongAnswerDialogComponent;
  let fixture: ComponentFixture<WrongAnswerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongAnswerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongAnswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
