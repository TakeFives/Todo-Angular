import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title!: string;

  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ) { }

  close(){
    if(!this.authService.isAuthenticated()) return

    this.modalService.close()
  }
}
