(() => {
  const app = document.getElementById('app');

  new MutationObserver(() => {
    app.querySelectorAll('section.card').forEach(card => {
      const swap = card.querySelector('[data-swap]');
      const name = card.querySelector('.ex-title')?.textContent;
      if (!swap || !name || card.querySelector('.machine-pictures')) return;

      const link = document.createElement('a');
      link.className = 'btn secondary small-btn machine-pictures';
      link.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${name} gym machine`)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Pictures';
      link.setAttribute('aria-label', `See pictures of the ${name} machine`);
      link.style.textDecoration = 'none';
      swap.before(link);
    });
  }).observe(app, {childList: true});
})();
