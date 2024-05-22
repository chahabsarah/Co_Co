import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFrontComponent } from './comment-front.component';

describe('CommentFrontComponent', () => {
  let component: CommentFrontComponent;
  let fixture: ComponentFixture<CommentFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
