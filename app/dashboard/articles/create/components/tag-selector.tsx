import { memo, useMemo, useCallback } from "react";
import { TagSelectorProps } from "../types";
import { Checkbox } from "@/components/ui/checkbox";

const TagSelector = memo(function TagSelector({
  selectedTags,
  availableTags,
  newTag,
  onTagToggle,
  onNewTagChange,
  onAddNewTag,
  isDisabled = false,
}: TagSelectorProps) {
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onAddNewTag();
      }
    },
    [onAddNewTag]
  );

  const handleTagChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onNewTagChange(e.target.value);
    },
    [onNewTagChange]
  );

  const memoizedTags = useMemo(
    () =>
      availableTags.map((tag) => ({
        name: tag,
        isSelected: selectedTags.has(tag),
      })),
    [availableTags, selectedTags]
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Tags</h3>

        {/* Add New Tag */}
        <div className="mb-4">
          <label htmlFor="new-tag-input" className="sr-only">
            Add new tag
          </label>
          <input
            id="new-tag-input"
            type="text"
            value={newTag}
            onChange={handleTagChange}
            onKeyPress={handleKeyPress}
            disabled={isDisabled}
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            placeholder="New tag"
            aria-describedby="new-tag-help"
          />
          <p id="new-tag-help" className="mt-1 text-xs text-muted-foreground">
            Press Enter to add a new tag
          </p>
        </div>

        {/* Tags List */}
        <div
          className="space-y-2 border-input rounded-md border p-4 max-h-[475px] h-full overflow-y-auto bg-background"
          role="group"
          aria-labelledby="tags-group-label"
        >
          <div id="tags-group-label" className="sr-only">
            Select tags for your article
          </div>

          {memoizedTags.map(({ name, isSelected }) => (
            <label
              key={name}
              className="flex items-center space-x-2 cursor-pointer hover:bg-accent/50 p-1 rounded transition-colors"
            >
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => onTagToggle(name)}
                disabled={isDisabled}
                aria-describedby={`tag-${name}-desc`}
              />
              <span
                id={`tag-${name}-desc`}
                className="text-sm text-foreground select-none"
              >
                {name}
              </span>
            </label>
          ))}

          {availableTags.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No tags available. Add a new tag above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export { TagSelector };
