import { FC, FormEventHandler } from 'react';

interface IContactUsInput {
  required?: boolean;
  label: string;
  placeholder: string;
  name: string;
  type: HTMLInputElement['type'];
  errorMessage: string;
  className?: string;
}

export const ContactUsInput: FC<IContactUsInput> = ({
  required = false,
  label,
  placeholder,
  name,
  type,
  errorMessage,
  className,
}) => {
  const handleOnInvalid: FormEventHandler<HTMLInputElement> = (e) => {
    (e.target as HTMLInputElement).setCustomValidity(errorMessage);
  };

  const handleOnInput: FormEventHandler<HTMLInputElement> = (e) => {
    (e.target as HTMLInputElement).setCustomValidity('');
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name}>
        {required && <span className="text-red">* </span>}
        <span>{label}</span>
      </label>
      <input
        onInvalid={handleOnInvalid}
        onInput={handleOnInput}
        type={type}
        name={name}
        id={name}
        required
        aria-required={required}
        placeholder={placeholder}
        className="border-solid border-2 border-primary-black text-sm py-3 px-2 rounded-md placeholder:text-primary-grey focus:outline-primary-green"
      />
    </div>
  );
};
