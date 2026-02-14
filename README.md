# after-dark

> A fork of the [after-dark](https://github.com/getzola/after-dark) Zola theme, adapted to display Telegram channel posts published via the [PostPal bot](https://github.com/en9inerd/postpal). Not intended for general use.

## Overview

This theme renders a static site from Telegram channel content. During the Zola build, it fetches channel metadata (title, description, subscriber count) from the Telegram Bot API and displays posts with their original images, formatted text, and links back to the Telegram channel.

Key features:

- Pulls channel title, description, and subscriber count from the Telegram Bot API at build time
- Links each post heading back to its original Telegram message
- Supports colocated images with click-to-open-in-new-tab behavior
- Spoiler-styled content support
- GitHub Pages deployment via GitHub Actions

## Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [Telegram channel](#telegram-channel)
  - [Top menu](#top-menu)
  - [Author](#author)
- [Environment variables](#environment-variables)
- [Deployment](#deployment)

## Installation

Add this theme as a submodule (or clone it) into your `themes` directory:

```bash
cd themes
git clone https://github.com/en9inerd/after-dark.git
```

Enable it in your `zola.toml`:

```toml
theme = "after-dark"
```

Your index section (`content/_index.md`) must be paginated:

```toml
paginate_by = 5
```

Posts live under `content/posts/` and are managed automatically by the [PostPal bot](https://github.com/en9inerd/postpal).

## Configuration

### Telegram channel

The theme requires a `[extra.telegram_channel]` section in `zola.toml`:

```toml
[extra.telegram_channel]
created_at = "2024-01-15"
id = "your_channel_id"
logo = "logo.jpg"
```

- `id` -- the public username of your Telegram channel (without the `@` prefix)
- `created_at` -- channel creation date, displayed on the homepage
- `logo` -- path to the channel logo in the `static/` directory

### Top menu

Set a field in `extra` with a key of `after_dark_menu`:

```toml
after_dark_menu = [
    {url = "$BASE_URL", name = "Home"},
]
```

`$BASE_URL` is automatically replaced with the actual site URL.

### Author

Set the author in `zola.toml`:

```toml
[extra]
author = "Author Name"
```

## Environment variables

The theme requires the following environment variable at build time:

- `TELEGRAM_BOT_TOKEN` -- the Telegram Bot API token used to fetch channel metadata (title, description, subscriber count)

## Deployment

A GitHub Actions workflow (`.github/workflows/docs.yml`) is included to build and deploy the site to GitHub Pages on every push to `master`.

## Original

This template is based on the [after-dark](https://github.com/getzola/after-dark) Zola theme, originally ported from the Hugo template by [comfusion](https://git.habd.as/comfusion/after-dark/).
