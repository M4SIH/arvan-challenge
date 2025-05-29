// Mock tags data (replace with API call later)
export const MOCK_TAGS = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Web Development",
  "Frontend",
  "Backend",
  "Node.js",
  "CSS",
  "HTML",
  "Python",
  "Database",
  "API",
  "Authentication",
  "Testing",
].sort();

export const FORM_VALIDATION_MESSAGES = {
  TITLE_REQUIRED: "Title is required",
  BODY_REQUIRED: "Body is required",
  ARTICLE_CREATED: "Well Done! Article created successfully",
} as const;

export const FORM_FIELDS = {
  TITLE: {
    id: "title",
    name: "title",
    label: "Title",
    placeholder: "Title",
    required: true,
  },
  DESCRIPTION: {
    id: "description",
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "textarea" as const,
    rows: 3,
  },
  BODY: {
    id: "body",
    name: "body",
    label: "Body",
    placeholder: "Write your article content here...",
    type: "textarea" as const,
    rows: 12,
    required: true,
  },
} as const;
