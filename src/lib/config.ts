import { type Breakpoint } from '../types';

/* =======================================
 * Basic
 * ======================================= */

export const PREFIX = 'b-';

/* =======================================
 * Animations
 * =======================================
 *
 * https://www.framer.com/motion
 * https://www.framer.com/motion/transition/#tween
 */

export const EASING = [0.76, 0, 0.18, 1];
export const EASE_IN_OUT = 'easeInOut';

export const DURATION = 0.15;
export const DURATION_S = 0.1;
export const DURATION_M = 0.3;
export const DURATION_L = 0.5;
export const DURATION_XL = 1;
export const DURATION_2XL = 1.5;

export const TRANS_DEFAULT = {
  duration: DURATION,
  ease: EASING,
};
export const TRANS_DEFAULT_XL = {
  duration: DURATION_XL,
  ease: EASING,
};
export const TRANS_DEFAULT_L = {
  duration: DURATION_L,
  ease: EASING,
};
export const TRANS_DEFAULT_M = {
  duration: DURATION_M,
  ease: EASING,
};
export const TRANS_DEFAULT_S = {
  duration: DURATION_S,
  ease: EASING,
};

export const TRANS_DEFAULT_EASE = {
  duration: DURATION,
  ease: EASE_IN_OUT,
};
export const TRANS_DEFAULT_EASE_L = {
  duration: DURATION_L,
  ease: EASE_IN_OUT,
};

/* =======================================
 * Chart config
 * =======================================
 *
 * https://nivo.rocks
 * https://nivo.rocks/guides/theming
 */

export const CHART = {
  bar: {
    theme: {},
  },
  default: {
    theme: {
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      grid: {
        line: {
          stroke: 'var(--b-surface-0-border)',
        },
      },
      textColor: 'var(--b-text)',
      tooltip: {
        container: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
        },
      },
    },
  },
  donut: {
    theme: {},
  },
  line: {
    theme: {
      axis: {
        ticks: {
          text: {
            fontSize: '',
          },
        },
      },
    },
  },
};

/* =======================================
 * Media queries
 * ======================================= */

export const BREAKPOINT: {
  [key in Breakpoint]: number;
} = {
  /* eslint-disable */
  base: 0,
  xxxs: 320,
  xxs: 360,
  xs: 480,
  s: 600,
  m: 768,
  ml: 900,
  l: 1024,
  xl: 1140,
  xxl: 1272,
  xxxl: 1440,
  xxxxl: 1512,
  xxxxxl: 1800,
  xxxxxxl: 2560,
};

export const MQ: {
  [key in Breakpoint]: string;
} = {
  /* eslint-disable */
  base: '(min-width: 0px)',
  xxxs: '(min-width: 320px)',
  xxs: '(min-width: 360px)',
  xs: '(min-width: 480px)',
  s: '(min-width: 600px)',
  m: '(min-width: 768px)',
  ml: '(min-width: 900px)',
  l: '(min-width: 1024px)',
  xl: '(min-width: 1140px)',
  xxl: '(min-width: 1272px)',
  xxxl: '(min-width: 1440px)',
  xxxxl: '(min-width: 1512px)',
  xxxxxl: '(min-width: 1800px)',
  xxxxxxl: '(min-width: 2560px)',
};

/* =======================================
 * Colors
 * ======================================= */

export const COLOR_ACCENT = [
  'var(--b-accent-1)',
  'var(--b-accent-1-900)',
  'var(--b-accent-1-800)',
  'var(--b-accent-1-700)',
  'var(--b-accent-1-600)',
  'var(--b-accent-1-500)',
  'var(--b-accent-1-400)',
  'var(--b-accent-1-300)',
  'var(--b-accent-1-200)',
  'var(--b-accent-1-100)',
  'var(--b-accent-1-50)',
  'var(--b-accent-2)',
  'var(--b-accent-2-900)',
  'var(--b-accent-2-800)',
  'var(--b-accent-2-700)',
  'var(--b-accent-2-600)',
  'var(--b-accent-2-500)',
  'var(--b-accent-2-400)',
  'var(--b-accent-2-300)',
  'var(--b-accent-2-200)',
  'var(--b-accent-2-100)',
  'var(--b-accent-2-50)',
  'var(--b-accent-3)',
  'var(--b-accent-3-900)',
  'var(--b-accent-3-800)',
  'var(--b-accent-3-700)',
  'var(--b-accent-3-600)',
  'var(--b-accent-3-500)',
  'var(--b-accent-3-400)',
  'var(--b-accent-3-300)',
  'var(--b-accent-3-200)',
  'var(--b-accent-3-100)',
  'var(--b-accent-3-50)',
  'var(--b-accent-4)',
  'var(--b-accent-4-900)',
  'var(--b-accent-4-800)',
  'var(--b-accent-4-700)',
  'var(--b-accent-4-600)',
  'var(--b-accent-4-500)',
  'var(--b-accent-4-400)',
  'var(--b-accent-4-300)',
  'var(--b-accent-4-200)',
  'var(--b-accent-4-100)',
  'var(--b-accent-4-50)',
  'var(--b-accent-5)',
  'var(--b-accent-5-900)',
  'var(--b-accent-5-800)',
  'var(--b-accent-5-700)',
  'var(--b-accent-5-600)',
  'var(--b-accent-5-500)',
  'var(--b-accent-5-400)',
  'var(--b-accent-5-300)',
  'var(--b-accent-5-200)',
  'var(--b-accent-5-100)',
  'var(--b-accent-5-50)',
] as const;

export const COLOR_PRIMARY = [
  'var(--b-primary)',
  'var(--b-primary-900)',
  'var(--b-primary-800)',
  'var(--b-primary-700)',
  'var(--b-primary-600)',
  'var(--b-primary-500)',
  'var(--b-primary-400)',
  'var(--b-primary-300)',
  'var(--b-primary-200)',
  'var(--b-primary-100)',
  'var(--b-primary-50)',
  'var(--b-primary-highlight)',
  'var(--b-primary-light)',
  'var(--b-primary-fg)',
  'var(--b-primary-fg-light)',
  'var(--b-primary-static-300)',
  'var(--b-primary-static-200)',
  'var(--b-primary-static-100)',
  'var(--b-primary-static-50)',
] as const;

export const COLOR_BACKGROUND = [
  'var(--b-bg-900)',
  'var(--b-bg-800)',
  'var(--b-bg-700)',
  'var(--b-bg-600)',
  'var(--b-bg-500)',
  'var(--b-bg-400)',
  'var(--b-bg-300)',
  'var(--b-bg-200)',
  'var(--b-bg-100)',
  'var(--b-bg-50)',
  'var(--b-bg-mute-900)',
  'var(--b-bg-mute-800)',
  'var(--b-bg-mute-700)',
  'var(--b-bg-mute-600)',
  'var(--b-bg-mute-500)',
  'var(--b-bg-mute-400)',
  'var(--b-bg-mute-300)',
  'var(--b-bg-mute-200)',
  'var(--b-bg-mute-100)',
  'var(--b-bg-mute-50)',
  'var(--b-bg-static-900)',
  'var(--b-bg-static-800)',
  'var(--b-bg-static-700)',
  'var(--b-bg-static-600)',
  'var(--b-bg-static-500)',
  'var(--b-bg-static-400)',
  'var(--b-bg-static-300)',
  'var(--b-bg-static-200)',
  'var(--b-bg-static-100)',
  'var(--b-bg-static-50)',
  'var(--b-bg-transparent)',
  'var(--b-surface-3)',
  'var(--b-surface-3-pop)',
  'var(--b-surface-2)',
  'var(--b-surface-2-pop)',
  'var(--b-surface-1)',
  'var(--b-surface-1-pop)',
  'var(--b-surface-0)',
  'var(--b-surface-0-pop)',
  'var(--b-static-white)',
  'var(--b-static-black)',
  'var(--b-black)',
  'var(--b-white)',
] as const;

export const COLOR_BORDER = [
  'var(--b-border-900)',
  'var(--b-border-800)',
  'var(--b-border-700)',
  'var(--b-border-600)',
  'var(--b-border-500)',
  'var(--b-border-400)',
  'var(--b-border-300)',
  'var(--b-border-200)',
  'var(--b-border-100)',
  'var(--b-border-50)',
  'var(--b-border-mute-900)',
  'var(--b-border-mute-800)',
  'var(--b-border-mute-700)',
  'var(--b-border-mute-600)',
  'var(--b-border-mute-500)',
  'var(--b-border-mute-400)',
  'var(--b-border-mute-300)',
  'var(--b-border-mute-200)',
  'var(--b-border-mute-100)',
  'var(--b-border-mute-50)',
  'var(--b-border-100-translucent)',
  'var(--b-border-200-translucent)',
  'var(--b-border-mute-200-translucent)',
  'var(--b-border-mute-100-translucent)',
  'var(--b-border-mute-strong)',
  'var(--b-surface-3-border)',
  'var(--b-surface-2-border)',
  'var(--b-surface-1-border)',
  'var(--b-surface-0-border)',
] as const;

export const COLOR_TEXT = [
  'var(--b-text-200)',
  'var(--b-text-100)',
  'var(--b-text-50)',
  'var(--b-text)',
  'var(--b-text-heading)',
  'var(--b-text-link)',
  'var(--b-text-link-hover)',
  'var(--b-text-static-500)',
  'var(--b-text-static-400)',
  'var(--b-text-static-300)',
  'var(--b-text-static-200)',
  'var(--b-text-static-100)',
  'var(--b-text-static-50)',
] as const;

export const COLOR_STATE = [
  'var(--b-success)',
  'var(--b-success-bg)',
  'var(--b-success-fg)',
  'var(--b-success-border)',
  'var(--b-warning)',
  'var(--b-warning-bg)',
  'var(--b-warning-fg)',
  'var(--b-warning-border)',
  'var(--b-error)',
  'var(--b-error-bg)',
  'var(--b-error-fg)',
  'var(--b-error-border)',
  'var(--b-info)',
  'var(--b-info-bg)',
  'var(--b-info-fg)',
  'var(--b-info-border)',
  'var(--b-highlight)',
  'var(--b-highlight-bg)',
  'var(--b-highlight-fg)',
  'var(--b-highlight-border)',
  'var(--b-neutral-bg)',
  'var(--b-neutral-fg)',
  'var(--b-neutral-border)',
  'var(--b-neutral-mute)',
  'var(--b-neutral-mute-light)',
] as const;

export const COLOR_ACCENT_ORDER = [
  'var(--b-accent-1-200)',
  'var(--b-accent-4)',
  'var(--b-accent-2-200)',
  'var(--b-accent-3)',
  'var(--b-accent-5-300)',
  'var(--b-accent-1-400)',
  'var(--b-accent-2)',
  'var(--b-accent-3-200)',
  'var(--b-accent-4-200)',
  'var(--b-accent-5-200)',
  'var(--b-accent-1-300)',
  'var(--b-accent-2-300)',
  'var(--b-accent-3-300)',
  'var(--b-accent-4-300)',
  'var(--b-accent-5)',
  'var(--b-accent-1-500)',
  'var(--b-accent-2-500)',
  'var(--b-accent-3-500)',
  'var(--b-accent-4-500)',
  'var(--b-accent-5-500)',
  'var(--b-accent-1-600)',
  'var(--b-accent-2-600)',
  'var(--b-accent-3-600)',
  'var(--b-accent-4-600)',
  'var(--b-accent-5-600)',
  'var(--b-accent-1-100)',
  'var(--b-accent-2-400)',
  'var(--b-accent-3-400)',
  'var(--b-accent-4-400)',
  'var(--b-accent-5-400)',
] as const;

export const COLOR_OTHER = [
  'var(--b-static-white)',
  'var(--b-static-black)',
  'var(--b-black)',
  'var(--b-white)',
  'var(--b-overlay)',
] as const;

/* =======================================
 * Helpers
 * ======================================= */

export const HELPER_MARGIN = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
] as const;

export const HELPER_PADDING = [
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
] as const;

export const HELPER = [...HELPER_MARGIN, ...HELPER_PADDING] as const;

/* =======================================
 * Service URL's
 * ======================================= */

export const SERVICE_URL = {
  domain: 'biocode.io',
  logIn: {
    development: {
      en: 'http://localhost:8000/login?language=fi',
      fi: 'http://localhost:8000/login',
    },
    production: {
      en: 'https://biocode.io/login',
      fi: 'https://biocode.io/login?language=fi',
    },
    staging: {
      en: 'https://staging-biocode.kinsta.cloud/login',
      fi: 'https://staging-biocode.kinsta.cloud/login?language=fi',
    },
  },
  producer: {
    development: {
      en: 'http://localhost:3001',
      fi: 'http://localhost:3001',
    },
    production: {
      en: 'https://producer.biocode.io',
      fi: 'https://producer.biocode.io',
    },
    staging: {
      en: 'https://producer-staging.biocode.io',
      fi: 'https://producer-staging.biocode.io',
    },
  },
  product: {
    development: {
      en: 'http://localhost:3000',
      fi: 'http://localhost:3000',
    },
    production: {
      en: 'https://product.biocode.io',
      fi: 'https://product.biocode.io',
    },
    staging: {
      en: 'https://product-staging.biocode.io',
      fi: 'https://product-staging.biocode.io',
    },
  },
  report: {
    development: {
      en: 'http://localhost:3003',
      fi: 'http://localhost:3003/fi',
    },
    production: {
      en: 'https://report.biocode.io',
      fi: 'https://report.biocode.io/fi',
    },
    staging: {
      en: 'https://report-staging.biocode.io',
      fi: 'https://report-staging.biocode.io/fi',
    },
  },
  signUp: {
    development: {
      en: 'http://localhost:8000/signup',
      fi: 'http://localhost:8000/signup?language=fi',
    },
    production: {
      en: 'https://biocode.io/signup',
      fi: 'https://biocode.io/signup?language=fi',
    },
    staging: {
      en: 'https://staging-biocode.kinsta.cloud/signup',
      fi: 'https://staging-biocode.kinsta.cloud/signup?language=fi',
    },
  },
  website: {
    development: {
      contact: {
        en: 'http://localhost:8000/contact',
        fi: 'http://localhost:8000/fi/yhteystiedot',
      },
      en: 'http://localhost:8000',
      fi: 'http://localhost:8000/fi',
    },
    production: {
      contact: {
        en: 'https://biocode.io/contact',
        fi: 'https://biocode.io/fi/yhteystiedot',
      },
      en: 'https://biocode.io',
      fi: 'https://biocode.io/fi',
    },
    staging: {
      contact: {
        en: 'https://staging-biocode.kinsta.cloud/contact',
        fi: 'https://staging-biocode.kinsta.cloud/fi/yhteystiedot',
      },
      en: 'https://staging-biocode.kinsta.cloud',
      fi: 'https://staging-biocode.kinsta.cloud/fi',
    },
  },
};
