import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  InviteService
} from '../../../../core/services/invite.service';

import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-send-invite',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './send-invite.component.html',

  styleUrl:
    './send-invite.component.css'
})

export class SendInviteComponent {

  inviteForm: FormGroup;

  constructor(

    private readonly formBuilder:
    FormBuilder,

    private readonly inviteService:
    InviteService,

    private readonly toastr:
ToastrService

  ) {

    this.inviteForm =
      this.formBuilder.group({

        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],

        role: [
          '',
          Validators.required
        ]

      });

  }

  sendInvite(): void {

    if (
      this.inviteForm.invalid
    ) {

      this.inviteForm
        .markAllAsTouched();

      return;

    }

    this.inviteService
      .sendInvite(
        this.inviteForm.value
      )
      .subscribe({

        next: () => {

          this.toastr.success(
            'Invite sent successfully'
          );

          this.inviteForm.reset();

        },

        error: () => {

          this.toastr.error(
            'Failed to send invite'
          );

        }

      });

  }

}