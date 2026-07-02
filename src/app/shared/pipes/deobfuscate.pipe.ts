import { Pipe, PipeTransform } from '@angular/core';

/**
 * Decodes a base64-encoded contact string (email/phone) at runtime.
 *
 * Contact details are stored base64-encoded in the JSON data so that
 * automated email/phone harvesters scraping the static files find no
 * plain-text address to match. The real value is only ever reconstructed
 * in the browser, on demand.
 */
@Pipe({
  name: 'deobfuscate',
  standalone: true,
})
export class DeobfuscatePipe implements PipeTransform {
  transform(value: string | undefined | null): string {
    if (!value) {
      return '';
    }
    try {
      return atob(value);
    } catch {
      return '';
    }
  }
}
