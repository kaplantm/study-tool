type FlaggedToggleProps = {
  flaggedOnly: boolean;
  setFlaggedOnly: (val: boolean) => void;
};

export default function FlaggedToggle({ flaggedOnly, setFlaggedOnly }: FlaggedToggleProps) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <label className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-300">
        <input
          type="checkbox"
          checked={flaggedOnly}
          onChange={(e) => setFlaggedOnly(e.target.checked)}
          className="h-4 w-4 rounded border-amber-400 text-amber-600 focus:ring-0 dark:border-amber-500"
        />
        Study flagged cards only
      </label>
    </div>
  );
}
