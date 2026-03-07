document.getElementById('llm-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const promptEl = document.getElementById('prompt');
  const statusEl = document.getElementById('status');
  const responseEl = document.getElementById('response');
  const submitBtn = document.getElementById('submit-btn');
  const prompt = promptEl.value.trim();
  if (!prompt) {
    statusEl.textContent = 'Introduce una pregunta.';
    return;
  }
  statusEl.textContent = 'Enviando…';
  submitBtn.disabled = true;
  responseEl.textContent = '';
  try {
    const res = await fetch('/llm/' + encodeURIComponent(prompt));
    if (!res.ok) throw new Error('Error en la petición: ' + res.status);
    const data = await res.json();
    responseEl.textContent = data['Esta es la respuesta'] || JSON.stringify(data, null, 2);
    statusEl.textContent = 'Respuesta recibida';
  } catch (err) {
    statusEl.textContent = 'Error: ' + err.message;
    responseEl.textContent = '';
  } finally {
    submitBtn.disabled = false;
  }
});
