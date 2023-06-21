/// <reference types="react-scripts" />
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  export default "" as string;
}
