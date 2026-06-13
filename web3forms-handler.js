/* ============================================================
   Web3Forms Order Form Handler
   Sweet Gypsy Design — drop-in snippet for test.js
   ============================================================

   HOW TO USE:
   1. Copy this entire block into your test.js (or keep it as a
      separate <script src="web3forms-handler.js"></script>).
   2. Change the form ID on the line marked ⬇️ CHANGE THIS ⬇️
      to match the `id` attribute of your HTML <form> element.
   3. That's it — no other config needed.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ─────────────────────────────────────────────────────
  // ⬇️ CHANGE THIS: Replace 'orderForm' with your actual
  //    HTML form's id attribute, e.g. 'contactForm'
  // ─────────────────────────────────────────────────────
  const form = document.getElementById('orderForm');

  // Safety check — exit silently if the form doesn't exist on the page
  if (!form) {
    console.warn('[Web3Forms] No form found with the specified ID. Skipping handler setup.');
    return;
  }

  form.addEventListener('submit', function (e) {
    // ── Step 1: Prevent the default browser reload (critical for GitHub Pages) ──
    e.preventDefault();

    // ── Step 2: Collect all form inputs into a FormData object ──
    const formData = new FormData(this);

    // ── Step 3: Append the Web3Forms Access Key ──
    formData.append('access_key', 'a8dbd6ab-2073-4472-ba30-d7dbd27f66eb');

    // ── Step 4: Send the data to Web3Forms via fetch (POST) ──
    // NOTE: Do NOT set a Content-Type header — the browser must auto-set
    //       the multipart/form-data boundary. Setting it manually causes CORS errors.
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // ── Step 5a: Handle success ──
        if (data.success) {
          alert(
            'Thank you for shopping with Sweet Gypsy Design! ' +
            'Your order has been placed. ' +
            'We will contact you shortly to complete the sale.'
          );
          // Clear all form inputs so the user can submit another order
          form.reset();
        } else {
          // Server responded but indicated failure
          console.error('[Web3Forms] Submission failed:', data);
          alert(
            'Oops! Something went wrong while placing your order. ' +
            'Please try again or contact us directly.'
          );
        }
      })
      .catch(function (error) {
        // ── Step 5b: Handle network / unexpected errors ──
        console.error('[Web3Forms] Network or unexpected error:', error);
        alert(
          'We\'re sorry — a network error occurred. ' +
          'Please check your internet connection and try again.'
        );
      });
  });

});
