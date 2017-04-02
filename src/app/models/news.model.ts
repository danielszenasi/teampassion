export class News {
  constructor(public key: string,
              public title: string,
              public subtitle: string,
              public paragraph: Array<any>,
              public createdDate: Date,
              public previewImage: string,
              public mainImage: string,
              public images?: Array<string>,
              public videos?: Array<string>) {
  }
}
