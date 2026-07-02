import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Member } from '../../models/content.models';
import { DeobfuscatePipe } from '../pipes/deobfuscate.pipe';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [NgOptimizedImage, DeobfuscatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss',
})
export class MemberCardComponent {
  @Input({ required: true }) member!: Member;
}
