import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string = '';
  qrcodeDataUrl: string = '';

  constructor() {}

  generateQRCode() {
    if (this.url) {
      QRCode.toDataURL(this.url)
        .then((dataUrl) => {
          this.qrcodeDataUrl = dataUrl;
        })
        .catch((error) => {
          console.error('Erro ao gerar QRCode', error);
        });
    }
  }
}
