const updateLinks = (originalLink, newLink) => {
  const links = Array.from(document.links);

  links.forEach((link) => {
    let hrefValue = link.getAttribute('href');

    if (hrefValue === originalLink) {
      hrefValue = link.setAttribute('href', newLink);
      link.textContent = 'The href value has been changed!';
    }
  });
};

updateLinks('https://www.google.com/', 'https://www.youtube.com/');
