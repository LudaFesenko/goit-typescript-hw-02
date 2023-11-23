/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentOfProps {
  title: string;
}
class Component<T extends ComponentOfProps> {
  constructor(public props: T) {}
}
interface PageProps extends ComponentOfProps {
  title: string;
}
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
