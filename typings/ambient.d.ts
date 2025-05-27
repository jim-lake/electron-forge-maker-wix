declare module 'parse-author' {
  type AuthorType =
    | string
    | {
        name: string;
      }
    | undefined;
  interface ParseAuthor {
    (author: AuthorType): AuthorType;
  }
  const parseAuthor: ParseAuthor;
  export default parseAuthor;
}

declare module 'rxjs' {
  type Observable<T> = any;
}