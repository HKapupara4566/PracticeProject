declare module 'react-native-pixel-perfect' {
  interface IDesignResolution {
    width: number;
    height: number;
  }

  export function create(
    designResolution: IDesignResolution,
  ): (size: number) => number;
}
