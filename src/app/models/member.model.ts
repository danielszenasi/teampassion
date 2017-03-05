export class Member {
  constructor(
    public name: string,
    public birthDay:Date,
    public birthPlace: string,
    public previewImage:string,
    public joinPassion: number,
    public past: string,
    public startSkate: number,
    public questions: Array<any>,
    public role?:string
  ) {  }
}
