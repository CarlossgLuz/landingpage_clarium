export function cn(...classes: (string | undefined | null | false | (string | undefined | null | false)[])[]): string {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}
