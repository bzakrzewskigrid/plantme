import { FC } from 'react';

interface IContactUsRadioButton {
  id: string;
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}

export const ContactUsRadioButton: FC<IContactUsRadioButton> = ({ id, name, value, label, defaultChecked = false }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="w-5 h-5 accent-primary-green focus:ring-primary-green m-3 block"
      />
      <label htmlFor={id} className="text-sm py-3">
        {label}
      </label>
    </div>
  );
};
