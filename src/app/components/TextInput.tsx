interface TextInputTypes {
  initialValue: string;
  placeholder: string;
  value: string;
}

export default function TextInput({ placeholder }: TextInputTypes) {
  return (
    <input
      className="p-2 rounded-xl w-full hover:border-cyan-500 border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      placeholder={placeholder}
    ></input>
  );
}
