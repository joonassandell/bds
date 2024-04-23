/** @type {import('nextra-theme-docs').DocsThemeConfig} */
import { Flex, Separator, Text, WordmarkBiocode } from '@biocode/ds';

export default {
  docsRepositoryBase:
    'https://github.com/joonassandell/biocode-design-system/tree/master/docs',
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://biocode.io" rel="noreferrer" target="_blank">
          Biocode
        </a>
      </span>
    ),
  },
  logo: (
    <Flex alignItems="center" gap="xSmall">
      <WordmarkBiocode />
      <Separator
        border="small"
        color="var(--b-border-mute-200)"
        orientation="vertical"
      />
      <Text size="small">Design System</Text>
    </Flex>
  ),
  nextThemes: {
    defaultTheme: 'light',
  },
  primaryHue: {
    dark: 230,
    light: 230,
  },
  primarySaturation: {
    dark: 94,
    light: 94,
  },
  project: {
    link: 'https://github.com/joonassandell/biocode-design-system',
  },
};
