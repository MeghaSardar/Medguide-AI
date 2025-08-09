function showPage(pageId) {
  const allPages = ['mainPage', 'uploadPage', 'analyzePage', 'resultPage'];
  allPages.forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  document.getElementById(pageId)?.classList.remove('hidden');
}
