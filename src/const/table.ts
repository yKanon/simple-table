export const ORDER = {
  asc: 'asc', // 正序
  desc: 'desc', // 倒序
  normal: undefined, // 无序
} as const;
export const DEFAULT_ORDERS = [ORDER.asc, ORDER.desc, ORDER.normal];
