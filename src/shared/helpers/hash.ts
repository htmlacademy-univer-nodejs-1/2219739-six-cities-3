import * as crypto from 'node:crypto';

export const createSHA256 = (line: string, salt: string): string => {
  if (!line || !salt) {
    throw new Error('Both line and salt must be provided.');
  }

  if (typeof line !== 'string' || typeof salt !== 'string') {
    throw new TypeError('Line and salt must be strings.');
  }

  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line, 'utf-8').digest('hex');
};
