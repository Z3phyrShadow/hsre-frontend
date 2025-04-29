interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  id: string;
  name: string;
  label: string;
  options: DropdownOption[];
  onChange?: (value: string) => void; 
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="text-[#1E1E1E]">
      <label htmlFor={props.id} className="block pb-2">
        {props.label}
      </label>
      <div className="border border-[#D9D9D9] rounded-md pr-2">
        <select id={props.id} name={props.name} className="w-[240px] p-2 pr-8">
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
