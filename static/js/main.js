function openInNewTab(imageElement) {
  const url = imageElement.src;
  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    newWindow.focus();
  }
}
