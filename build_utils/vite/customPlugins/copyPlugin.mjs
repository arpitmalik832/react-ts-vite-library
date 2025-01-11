/**
 * Copy Plugin for Rollup.
 * @file The file is saved as `copy.mjs`.
 */
import copy from 'rollup-plugin-copy';

/**
 * Generates the configuration for the rollup copy plugin.
 * @returns {import('rollup-plugin-copy').Options} The configuration object for the copy plugin.
 * @example
 * const copyConfig = config();
 * console.log(copyConfig);
 */
const config = () =>
  copy({
    targets: [
      {
        src: 'static/styles/*',
        dest: 'dist',
      },
      {
        src: 'src/styles/mixins/*',
        dest: 'dist',
      },
      {
        src: 'static/enums/icons_list.mjs',
        dest: 'dist',
      },
      {
        src: 'static/enums/icons_list.ts',
        dest: 'dist',
      },
    ],
    hook: 'writeBundle',
    verbose: true, // Add this to see more details about the copy operation
    flatten: false, // Add this to preserve directory structure
  });

export default config;
