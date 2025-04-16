interface InputTextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
}

export default function InputTextArea(props: InputTextAreaProps) {
  return (
    <div className="grid gap-1.5 text-[#1E1E1E] text-base">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="outline-none resize-none whitespace-pre-wrap break-words border border-[#D9D9D9] rounded-md pl-3 pt-2 placeholder:text-[#B3B3B3] min-h-20"
      ></textarea>
    </div>
  );
}
