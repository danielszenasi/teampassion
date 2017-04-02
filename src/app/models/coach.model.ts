import {Question} from './question.model';

export class Coach {
  constructor(public name: string,
              public previewImage: string,
              public joinPassion: number,
              public career: string,
              public questions: Array<Question>) {
  }
}
