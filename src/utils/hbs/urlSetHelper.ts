import { urls } from '../../config';

function urlSetHelper(val: string): string {
  const urlsInfo = urls as Record<string, string>;
  return urlsInfo[val] || '#';
}

export default urlSetHelper;
