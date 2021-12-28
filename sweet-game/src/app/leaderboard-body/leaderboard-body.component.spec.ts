import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardBodyComponent } from './leaderboard-body.component';

describe('LeaderboardBodyComponent', () => {
  let component: LeaderboardBodyComponent;
  let fixture: ComponentFixture<LeaderboardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
