interface Props {
  value: number; // 0-100
  label?: string;
}

const ProgressBar = ({ value, label }: Props) => (
  <div className="space-y-1">
    {label && (
      <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
    )}
    <div className="h-3 rounded bg-gray-200 dark:bg-gray-800">
      <div
        style={{ width: `${value}%` }}
        className="h-full rounded bg-primary-500 transition-[width] duration-700 ease-out"
      />
    </div>
  </div>
);

export default ProgressBar;
