"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import { FormField } from "./components/form-field";
import { TagSelector } from "./components/tag-selector";
import { SubmitButton } from "./components/submit-button";
import { useTagManagement } from "./hooks/use-tag-management";
import {
  MOCK_TAGS,
  FORM_VALIDATION_MESSAGES,
  FORM_FIELDS,
} from "./lib/constants";
import type { CreateArticleFormData, FormState } from "./types";

async function createArticle(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const body = formData.get("body") as string;
  const tags = formData.getAll("tags") as string[];

  const fieldErrors: FormState["fieldErrors"] = {};

  // Validate required fields
  if (!title?.trim()) {
    fieldErrors.title = FORM_VALIDATION_MESSAGES.TITLE_REQUIRED;
  }

  if (!body?.trim()) {
    fieldErrors.body = FORM_VALIDATION_MESSAGES.BODY_REQUIRED;
  }

  // Return field errors if any
  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  // Create article data
  const articleData: CreateArticleFormData = {
    title: title.trim(),
    description: description?.trim() || "",
    body: body.trim(),
    tags,
  };

  console.log("Creating article:", articleData);

  return { success: true };
}

export default function CreateArticlePage() {
  const [state, formAction, isPending] = useActionState(createArticle, {});
  const formRef = useRef<HTMLFormElement>(null);

  // Client-side validation state
  const [clientErrors, setClientErrors] = useState<{
    title?: string;
    body?: string;
  }>({});

  const {
    selectedTags,
    allTags,
    newTag,
    handleTagToggle,
    handleNewTagChange,
    handleAddNewTag,
    resetSelection,
  } = useTagManagement({ initialTags: MOCK_TAGS });

  // Client-side validation function
  const validateForm = (formData: FormData): boolean => {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const errors: typeof clientErrors = {};

    if (!title?.trim()) {
      errors.title = FORM_VALIDATION_MESSAGES.TITLE_REQUIRED;
    }

    if (!body?.trim()) {
      errors.body = FORM_VALIDATION_MESSAGES.BODY_REQUIRED;
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Enhanced form action with client-side validation
  const handleFormAction = (formData: FormData) => {
    // Clear previous client errors
    setClientErrors({});

    // Validate form before submission
    if (validateForm(formData)) {
      formAction(formData);
    }
  };

  // Reset form when successfully submitted
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      resetSelection();
      setClientErrors({}); // Clear client errors on success
    }
  }, [state.success, resetSelection]);

  // Clear client errors when server validation succeeds or fails
  useEffect(() => {
    if (state.fieldErrors || state.success) {
      setClientErrors({});
    }
  }, [state.fieldErrors, state.success]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Header */}
          <header className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">
              New article
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Create a new article for your blog
            </p>
          </header>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <section className="lg:col-span-2" aria-label="Article form">
                <form
                  ref={formRef}
                  action={handleFormAction}
                  className="space-y-6"
                  noValidate
                >
                  {/* Hidden inputs for selected tags */}
                  {Array.from(selectedTags).map((tag) => (
                    <input key={tag} type="hidden" name="tags" value={tag} />
                  ))}

                  {/* Form Fields */}
                  <FormField
                    {...FORM_FIELDS.TITLE}
                    error={clientErrors.title || state.fieldErrors?.title}
                  />

                  <FormField {...FORM_FIELDS.DESCRIPTION} />

                  <FormField
                    {...FORM_FIELDS.BODY}
                    error={clientErrors.body || state.fieldErrors?.body}
                  />

                  {/* Submit Button */}
                  <div>
                    <SubmitButton isLoading={isPending}>Submit</SubmitButton>
                  </div>

                  {/* General Error Messages */}
                  {state.error && (
                    <div
                      className="p-3 bg-red-50 border border-red-200 rounded-md"
                      role="alert"
                      aria-live="polite"
                    >
                      <p className="text-sm text-red-600">{state.error}</p>
                    </div>
                  )}

                  {/* Success Message */}
                  {state.success && (
                    <div
                      className="p-3 bg-green-50 border border-green-200 rounded-md"
                      role="status"
                      aria-live="polite"
                    >
                      <p className="text-sm text-green-600">
                        {FORM_VALIDATION_MESSAGES.ARTICLE_CREATED}
                      </p>
                    </div>
                  )}
                </form>
              </section>

              {/* Tags Sidebar */}
              <aside aria-label="Tag selection">
                <TagSelector
                  selectedTags={selectedTags}
                  availableTags={allTags}
                  newTag={newTag}
                  onTagToggle={handleTagToggle}
                  onNewTagChange={handleNewTagChange}
                  onAddNewTag={handleAddNewTag}
                  isDisabled={isPending}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
