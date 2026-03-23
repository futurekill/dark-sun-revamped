# Dark Sun Revamped

A Foundry VTT module bringing the **Dark Sun** setting to the **Old-School Essentials (OSE)** system. Set on the dying world of Athas — a scorched desert planet stripped of nature by reckless sorcery — this module provides compendium packs for the complete Dark Sun Revamped ruleset.

## Requirements

- **Foundry VTT** v13+
- **Old-School Essentials (OSE)** system

## Compendium Packs

| Pack | Contents |
|------|----------|
| **Dark Sun Bestiary** | All Athasian monsters and creatures |
| **Dark Sun Spells & Psionics** | Preserver/Defiler spells, Cleric spells, and Psionic wild talents |
| **Dark Sun Weapons** | Bone, obsidian, wood, and metal weapons with Athasian pricing |
| **Dark Sun Armor** | Armor types appropriate to Athas |
| **Dark Sun Equipment** | Trade goods, tools, survival gear, and miscellaneous items |
| **Dark Sun Classes** | All Dark Sun character classes |

## Installation

**Method 1 — Manifest URL** (recommended):
1. In Foundry VTT, go to **Add-on Modules → Install Module**
2. Paste this URL into the Manifest URL field:
   ```
   https://github.com/futurekill/dark-sun-revamped/releases/latest/download/module.json
   ```
3. Click **Install**

**Method 2 — Manual**:
Download the latest `dark-sun-revamped.zip` from [Releases](https://github.com/futurekill/dark-sun-revamped/releases) and extract it into your Foundry `Data/modules/` directory.

## Development

Compendium data lives in `packs/<pack-name>/_source/` as individual JSON files. The GitHub Actions workflow compiles these into LevelDB packs on release.

### Releasing a New Version

1. Commit and push all changes to `main`
2. Tag the commit with a semantic version:
   ```bash
   git tag v0.2.0 && git push --tags
   ```
3. GitHub Actions automatically builds and publishes the release.

## Credits

- Dark Sun Revamped rules content © their respective authors
- Module by James Candalino ([@futurekill](https://github.com/futurekill))

## License

MIT — see [LICENSE](LICENSE)
