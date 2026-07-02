import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-research-vision',
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './research-vision.component.html',
  styleUrl: './research-vision.component.scss',
})
export class ResearchVisionComponent {
  private readonly content = inject(ContentService);
  readonly paragraphs$ = this.content.getResearchVision();
}
