import {atom, RecoilState} from 'recoil';

type DynamicAtoms = {
  [key: string]: RecoilState<any>;
};

const atoms: DynamicAtoms = {};

function dynamicAtoms<T>(key: string, defaultValue: T): RecoilState<T> {
  const atomKey = `atom_${key.toUpperCase()}`;

  if (!atoms[atomKey]) {
    atoms[atomKey] = atom<T>({
      key: atomKey,
      default: defaultValue,
    });
  }

  return atoms[atomKey] as RecoilState<T>;
}
export default dynamicAtoms;
