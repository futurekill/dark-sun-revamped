/**
 * Dark Sun Revamped — Foundry VTT Module (dark-sun-revamped)
 *
 * Main entry point for the Dark Sun Revamped compendium module.
 * Registers hooks and adds Dark Sun flavour to the OSE system.
 *
 * Architecture: OSE (base system) → dark-sun-revamped (Module)
 * Target: Foundry VTT V13
 */

export const MODULE_ID = 'dark-sun-revamped';

// ═══════════════════════════════════════════════════════════════════════════
//  INIT — fires during Game#initialize, before the world is ready
// ═══════════════════════════════════════════════════════════════════════════
Hooks.once('init', () => {
  console.log(`${MODULE_ID} | Initialising Dark Sun Revamped module`);

  // Add body class for CSS theming
  document.body.classList.add('dark-sun-revamped-active');
});

// ═══════════════════════════════════════════════════════════════════════════
//  READY — fires after all systems and modules have finished initialising
// ═══════════════════════════════════════════════════════════════════════════
Hooks.once('ready', () => {
  // Verify OSE system is active
  if (game.system.id !== 'ose') {
    ui.notifications.error(
      `Dark Sun Revamped requires the Old-School Essentials (OSE) system.`
    );
    return;
  }

  console.log(`${MODULE_ID} | OSE system detected — Dark Sun Revamped is active`);

  // Expose public API
  game.modules.get(MODULE_ID).api = {
    MODULE_ID
  };
});
