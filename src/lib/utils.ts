// import { Block } from "@/types";

// export function flattenAttributes(data: any): any {
//   if (
//     typeof data !== "object" ||
//     data === null ||
//     data instanceof Date ||
//     typeof data === "function"
//   ) {
//     return data;
//   }

//   if (Array.isArray(data)) {
//     return data.map((item) => flattenAttributes(item));
//   }

//   let flattened: { [key: string]: any } = {};

//   for (let key in data) {
//     if (!data.hasOwnProperty(key)) continue;

//     if (
//       (key === "attributes" || key === "data") &&
//       typeof data[key] === "object" &&
//       !Array.isArray(data[key])
//     ) {
//       Object.assign(flattened, flattenAttributes(data[key]));
//     } else {
//       flattened[key] = flattenAttributes(data[key]);
//     }
//   }

//   return flattened;
// }

// export function getStrapiURL() {
//   return process.env.STRAPI_BASE_URL ?? "http://localhost:1337";
// }

// export function getStrapiMedia(url: string | null) {
//   if (url == null) return null;
//   if (url.startsWith("data:")) return url;
//   if (url.startsWith("http") || url.startsWith("//")) return url;
//   return `${getStrapiURL()}${url}`;
// }

// export function getBlock<T extends Block>(
//   blocks: Block[],
//   component: T["__component"]
// ): T | undefined {
//   return blocks.find(
//     (block): block is T => block.__component === component
//   );
// }

import { Block } from "@/types";

type Primitive = string | number | boolean | null | undefined | Date;
type Flattened<T> = T extends Primitive
  ? T
  : T extends (infer U)[]
  ? Flattened<U>[]
  : T extends object
  ? { [K in keyof T]: Flattened<T[K]> }
  : T;

/**
 * Recursively flattens Strapi's nested `attributes` and `data` objects.
 */
export function flattenAttributes<T>(data: T): Flattened<T> {
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data as Flattened<T>;
  }

  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item)) as Flattened<T>;
  }

  const flattened = {} as Record<string, unknown>;

  for (const key of Object.keys(data)) {
    const value = (data as Record<string, unknown>)[key];

    if (
      (key === "attributes" || key === "data") &&
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      Object.assign(flattened, flattenAttributes(value));
    } else {
      flattened[key] = flattenAttributes(value);
    }
  }

  return flattened as Flattened<T>;
}

export function getStrapiURL(): string {
  return process.env.STRAPI_BASE_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url: string | null): string | null {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export function getBlock<T extends Block>(
  blocks: Block[],
  component: T["__component"]
): T | undefined {
  return blocks.find((block): block is T => block.__component === component);
}
