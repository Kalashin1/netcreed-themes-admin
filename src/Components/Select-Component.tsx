import Select from 'react-select'
import { FC } from 'react';

type Props<T> = {
  options: T[]
}

const SelectComponent: FC<Props<any>> = ({ options }) => {
  return (
    <Select options={options} />
  );
}

export default SelectComponent;