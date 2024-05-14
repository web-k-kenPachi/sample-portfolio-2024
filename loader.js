'use client';

// export default function myImageLoader({ src, width, quality }) {
//   return `https://portfolio.kenpachi.design/${src}?w=${width}&q=${quality || 75}`;
// }

// const normalizeSrc = (src) => {
//   return src.startsWith('/') ? src.slice(1) : src;
// };

// export default function cloudflareLoader({ src, width, quality }) {
//   const params = [`width=${width}`];
//   if (quality) {
//     params.push(`quality=${quality || 75}`);
//   }
//   const paramsString = params.join(',');
//   return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
// }

// Docs: https://developers.cloudflare.com/images/url-format
export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  // return `https://example.com/cdn-cgi/image/${params.join(',')}/${src}`;
  return `${src}`;
}
