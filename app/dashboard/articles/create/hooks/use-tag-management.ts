import { useState, useCallback } from "react";

interface UseTagManagementOptions {
  initialTags: string[];
}

interface UseTagManagementReturn {
  selectedTags: Set<string>;
  allTags: string[];
  newTag: string;
  handleTagToggle: (tag: string) => void;
  handleNewTagChange: (tag: string) => void;
  handleAddNewTag: () => void;
  resetSelection: () => void;
}

export function useTagManagement({
  initialTags,
}: UseTagManagementOptions): UseTagManagementReturn {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [newTag, setNewTag] = useState("");
  const [allTags, setAllTags] = useState<string[]>(initialTags);

  const handleTagToggle = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  }, []);

  const handleNewTagChange = useCallback((tag: string) => {
    setNewTag(tag);
  }, []);

  const handleAddNewTag = useCallback(() => {
    if (!newTag.trim()) return;
    if (allTags.includes(newTag.trim())) return;

    const trimmedTag = newTag.trim();
    const updatedTags = [...allTags, trimmedTag].sort();

    setAllTags(updatedTags);
    setSelectedTags((prev) => new Set([...prev, trimmedTag]));
    setNewTag("");
  }, [newTag, allTags]);

  const resetSelection = useCallback(() => {
    setSelectedTags(new Set());
    setNewTag("");
  }, []);

  return {
    selectedTags,
    allTags,
    newTag,
    handleTagToggle,
    handleNewTagChange,
    handleAddNewTag,
    resetSelection,
  };
}
