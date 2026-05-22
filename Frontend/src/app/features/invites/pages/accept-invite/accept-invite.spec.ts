import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcceptInviteComponent } from './accept-invite.component';

describe('AcceptInvite', () => {
  let component: AcceptInviteComponent;
  let fixture: ComponentFixture<AcceptInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptInviteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptInviteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
