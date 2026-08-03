# Contributing

## Adding a tool

Each tool lives in its own folder under `tools/`, named with a lowercase, hyphenated slug (e.g. `base64-encode`, `uuid-generator`).

Register the tool by adding an entry to `tools_index.json`:

```json
{
    "id": "your-tool-slug",
    "title": "Your Tool Title",
    "description": "a short, lowercase description"
}
```

### Tool naming conventions

1. slugs: lowercase, hyphenated, `{thing}-{action}` where possible (e.g. `base64-encode`, not `encode-base64`), when a qualifier is needed for clarity, `{noun}-{thing}-{action}` (e.g `random-topic-generator`)
2. `title`: capitalized, human-readable
3. `description`: lowercase, terse, no trailing period

## Data chunking

Some tools that uses a dataset (like `random-topic-generator`) chunk their dataset to keep individual files small and easy to edit.

Keep chunk files under 2KB, and name them `{name}-chunk-{n}.{ext}` in a subdirectory inside the tool's directory, e.g. `random-topic-generator/topics/topics-chunk-1.json`.
