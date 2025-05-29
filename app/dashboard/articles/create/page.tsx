"use client";

import { useState, useActionState } from "react";

// Mock tags data (replace with API call later)
const MOCK_TAGS = [
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

async function createArticle(
  prevState: { error?: string; success?: boolean },
  formData: FormData
): Promise<{ error?: string; success?: boolean }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const body = formData.get("body") as string;
  const tags = formData.getAll("tags") as string[];

  if (!title?.trim()) {
    return { error: "Title is required" };
  }

  if (!body?.trim()) {
    return { error: "Body is required" };
  }

  // Simulate API call
  console.log("Creating article:", { title, description, body, tags });

  return { success: true };
}

export default function CreateArticlePage() {
  const [state, formAction, isPending] = useActionState(createArticle, {});
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [newTag, setNewTag] = useState("");
  const [allTags, setAllTags] = useState<string[]>(MOCK_TAGS);

  const handleTagToggle = (tag: string) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  const handleAddNewTag = () => {
    if (newTag.trim() && !allTags.includes(newTag.trim())) {
      const trimmedTag = newTag.trim();
      const updatedTags = [...allTags, trimmedTag].sort();
      setAllTags(updatedTags);
      setSelectedTags(new Set([...selectedTags, trimmedTag]));
      setNewTag("");
    }
  };

  const handleNewTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddNewTag();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">
              New article
            </h1>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <form action={formAction} className="space-y-6">
                  {/* Hidden inputs for selected tags */}
                  {Array.from(selectedTags).map((tag) => (
                    <input key={tag} type="hidden" name="tags" value={tag} />
                  ))}

                  {/* Title Field */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none  text-gray-900 placeholder-gray-500"
                      placeholder="Title"
                    />
                  </div>

                  {/* Description Field */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Description"
                    />
                  </div>

                  {/* Body Field */}
                  <div>
                    <label
                      htmlFor="body"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Body
                    </label>
                    <textarea
                      id="body"
                      name="body"
                      rows={12}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Write your article content here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isPending ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>

                  {/* Error/Success Messages */}
                  {state.error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-600">{state.error}</p>
                    </div>
                  )}
                  {state.success && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm text-green-600">
                        Article created successfully!
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Tags Sidebar */}
              <div className="space-y-6">
                {/* Tags Section */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Tags
                  </h3>

                  {/* Add New Tag */}
                  <div className="mb-4">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={handleNewTagKeyPress}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  text-gray-900 placeholder-gray-500"
                      placeholder="New tag"
                    />
                  </div>

                  <div className="space-y-2 border-gray-300 rounded-md border p-4 max-h-[475px] h-full overflow-y-auto">
                    {allTags.map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTags.has(tag)}
                          onChange={() => handleTagToggle(tag)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
