interface CheckboxProps {
  name: string;
  id: string;
  label: string;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        className="accent-[#2C2C2C]"
      />
      <label htmlFor={props.id} className="ml-3 text-base">
        {props.label}
      </label>
    </div>
  );
}
