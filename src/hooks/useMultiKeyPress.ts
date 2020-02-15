import Mousetrap from 'mousetrap';
import { useEffect } from 'react';

export const useMultiKeyPress = (
  targetKeys: string[],
  callback: (e: ExtendedKeyboardEvent, combo: string) => any,
) => {
  useEffect(() => {
    const mt = new Mousetrap(document.body);

    mt.bind(targetKeys, callback);

    return () => {
      mt.unbind(targetKeys);
    };
  }, [targetKeys]);
};
