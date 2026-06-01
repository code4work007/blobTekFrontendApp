/**
 * Type-safe localStorage helpers
 */

export function getStorageItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn(`Failed to save "${key}" to localStorage`);
  }
}

export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    console.warn(`Failed to remove "${key}" from localStorage`);
  }
}

export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch {
    console.warn('Failed to clear localStorage');
  }
}
