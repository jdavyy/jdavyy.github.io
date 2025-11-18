
// lib/utils.ts

/**
 * Utility function to combine Tailwind CSS class names conditionally.
 * @param classes - Array of class names or conditional class names.
 * @returns A single string of merged classes.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
