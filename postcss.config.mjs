const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',  // 576px
        'mantine-breakpoint-sm': '48em',  // 768px
        'mantine-breakpoint-md': '64em',  // 1024px
        'mantine-breakpoint-lg': '80em',  // 1280px
        'mantine-breakpoint-xl': '96em',  // 1536px
      },
    },
  },
};

export default config;
