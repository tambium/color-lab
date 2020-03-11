export const copyPalette = async ({ palette, output }) => {
  let result;

  if (output === 'JSON') {
    result = [];

    palette.forEach((shadeSet, shadeKey) => {
      const shadeSetKeys = [...shadeSet.keys()];

      result.push({
        title: shadeKey,
        shades: shadeSetKeys.map((key) => {
          return {
            shade: key,
            hex: shadeSet.get(key).hex,
          };
        }),
      });
    });

    result = JSON.stringify(result);
  }

  if (output === 'theme') {
    result = ``;

    palette.forEach((shadeSet, shadeKey) => {
      const identifier = shadeKey.charAt(0).toUpperCase();

      const shadeSetKeys = [...shadeSet.keys()];
      shadeSetKeys.forEach((key) => {
        const color = shadeSet.get(key);
        const { hex } = color;
        result = result + `export const ${identifier}${key} = ${hex};\n`;
      });

      result = result + `\n`;
    });
  }

  if (!navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(result);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
};
