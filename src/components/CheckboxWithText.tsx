interface CheckboxWithTextProps {
  id: string;
  name: string;
  label: string;
  text: string;
  checked: boolean; // Added the 'checked' prop
  onChange: (e: any) => void;
}

export default function CheckboxWithText(props: CheckboxWithTextProps) {
  return (
    <div className="flex items-start space-x-2 mb-3 text-[#1E1E1E] text-base">
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        className="accent-[#2C2C2C]"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={props.id}
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.label}
        </label>
        <p className="text-[#757575]">{props.text}</p>
      </div>
    </div>
  );
}
