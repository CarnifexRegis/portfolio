export interface Project {
  title: string;
  context: string;
  longDescription: string;
  tags: string[];
  link: {
    text: string;
    url: string;
  };
  image: string;
}
