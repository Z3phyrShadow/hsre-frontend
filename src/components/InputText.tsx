interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="grid gap-1.5 text-[#1E1E1E] text-base">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="outline-none border border-[#D9D9D9] rounded-md pl-3 py-1.5 placeholder:text-[#B3B3B3]"
      />
    </div>
  );
}
