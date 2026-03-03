export async function loadFonts() {
  const webFontLoader = await import("webfontloader");

  webFontLoader.load({
    google: {
      families: [
        "Sora:300,400,500,600,700&display=swap",
        "Manrope:400,500,600,700,800&display=swap",
      ],
    },
  });
}
