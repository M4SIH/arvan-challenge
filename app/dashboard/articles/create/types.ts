export interface CreateArticleFormData {
  title: string;
  description: string;
  body: string;
  tags: string[];
}

export interface FormState {
  error?: string;
  success?: boolean;
  isLoading?: boolean;
  fieldErrors?: {
    title?: string;
    body?: string;
  };
}

export interface TagsState {
  selected: Set<string>;
  available: string[];
  newTag: string;
}

export interface TagSelectorProps {
  selectedTags: Set<string>;
  availableTags: string[];
  newTag: string;
  onTagToggle: (tag: string) => void;
  onNewTagChange: (tag: string) => void;
  onAddNewTag: () => void;
  isDisabled?: boolean;
}

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "textarea";
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
  error?: string;
}
