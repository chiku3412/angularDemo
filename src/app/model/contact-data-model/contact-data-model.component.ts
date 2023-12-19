import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-data-model',
  templateUrl: './contact-data-model.component.html',
  styleUrls: ['./contact-data-model.component.scss']
})
export class ContactDataModelComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
