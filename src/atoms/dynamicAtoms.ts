import {atom} from 'recoil';

const atoms: Record<string, ReturnType<typeof atom>> = {};

/**
 * Creates or retrieves a dynamic Recoil atom.
 *
 * @param key - A unique key for the atom. This key will be upperCased and prefixed.
 * @param defaultValue - The default value for the atom.
 * @returns - A Recoil atom associated with the given key.
 */

const dynamicAtoms = (key: string, defaultValue: any) => {
  const _key = `atom_${key.toUpperCase()}`;

  // Check if an atom with this key already exists, if not, create a new one.
  if (!atoms.hasOwnProperty(_key)) {
    atoms[_key] = atom({
      key: _key,
      default: defaultValue,
    });
  }

  // Return the existing or new atom.
  return atoms[_key];
};

export default dynamicAtoms;
