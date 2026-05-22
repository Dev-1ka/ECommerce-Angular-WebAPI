import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  InviteService
} from '../../../../core/services/invite.service';

import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-accept-invite',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './accept-invite.component.html',

  styleUrl:
    './accept-invite.component.css'
})

export class AcceptInviteComponent
implements OnInit {

  acceptForm: FormGroup;

  token = '';

  isSendingInvite = false;

  constructor(

    private readonly fb:
    FormBuilder,

    private readonly route:
    ActivatedRoute,

    private readonly inviteService:
    InviteService,

    private readonly router:
    Router,

    private readonly toastr:
ToastrService

  ) {

    this.acceptForm =
      this.fb.group({

        fullName: [
          '',
          Validators.required
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]

      });

  }

  ngOnInit(): void {

    this.token =
      this.route.snapshot.queryParams[
        'token'
      ];

    console.log(
      'Invite Token:',
      this.token
    );

  }

  acceptInvite(): void {

    if (
      this.acceptForm.invalid
    ) {

      this.acceptForm
        .markAllAsTouched();

      return;

    }

    this.isSendingInvite = true;

    const request = {

      fullName:
        this.acceptForm.value.fullName,

      password:
        this.acceptForm.value.password,

      token:
        this.token

    };

    console.log(request);

    this.inviteService
      .acceptInvite(request)
      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.isSendingInvite = false;

          this.toastr.success(
            'Account activated successfully'
          );

          this.router.navigate([
            '/login'
          ]);

        },

        error: (error: any) => {

          console.log(error);

          this.isSendingInvite = false;

          this.toastr.error(

            'Invite acceptance failed'
          );

        }

      });

  }

}

