declare module "three/examples/jsm/loaders/OBJLoader.js" {
  import { Loader } from "three";
  export class OBJLoader extends Loader {
    load(
      url: string,
      onLoad: (object: import("three").Group) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module "three/examples/jsm/loaders/STLLoader.js" {
  import { Loader } from "three";
  export class STLLoader extends Loader {
    load(
      url: string,
      onLoad: (geometry: import("three").BufferGeometry) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
