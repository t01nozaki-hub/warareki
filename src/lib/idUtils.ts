import { createHash } from 'crypto';

/**
 * 芸人名から一意の英数字ID（MD5ハッシュの先頭8文字）を生成します。
 * これにより、日本語URLによるサーバー側の404エラーを回避します。
 */
export function nameToId(name: string): string {
  // 名前が空の場合は適当な文字列を返す
  if (!name) return 'unknown';
  return createHash('md5').update(name).digest('hex').slice(0, 8);
}
