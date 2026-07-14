# mwutil

a lightweight, open source, growing collection of small web-based utilities.

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

Naming conventions:

- slugs: lowercase, hyphenated, `{thing}-{action}` where possible (e.g. `base64-encode`, not `encode-base64`)
- `title`: capitalized, human-readable
- `description`: lowercase, terse, no trailing period

## Third-party

- [Showdown](https://github.com/showdownjs/showdown): MIT License
- [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono): SIL Open Font License 1.1

## License

MIT
