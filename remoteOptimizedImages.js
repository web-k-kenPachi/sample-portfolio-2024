const getImageUrls = async () => {
  const res = await fetch('http://localhost:3000/api/');
  const dataUrl = await res.json();
  return dataUrl;
};

module.exports = getImageUrls();
