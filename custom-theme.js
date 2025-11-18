document.addEventListener('DOMContentLoaded', function() {
  const bgColorInput = document.getElementById('bgColor');
  const textColorInput = document.getElementById('textColor');
  const fontSelect = document.getElementById('fontSelect');
  const applyBtn = document.getElementById('applyCustom');
  const html = document.documentElement;
  
  if (!bgColorInput || !textColorInput || !fontSelect || !applyBtn) {
    return;
  }
  
  applyBtn.addEventListener('click', function() {
    html.style.setProperty('--bg-color', bgColorInput.value);
    html.style.setProperty('--text-color', textColorInput.value);
    document.body.style.fontFamily = fontSelect.value;
    document.documentElement.style.fontFamily = fontSelect.value;
  });
});

