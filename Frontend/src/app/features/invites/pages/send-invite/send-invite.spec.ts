import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInviteComponent } from './send-invite.component';

describe('SendInvite', () => {
  let component: SendInviteComponent;
  let fixture: ComponentFixture<SendInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendInviteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SendInviteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
